const db = require("../models");
const Content = db.content;
const { Op } = require("sequelize");
const AutoTaggingService = require("../services/ml/autotagging");
const path = require('path');

exports.createContent = async (req, res) => {
  try {
    // Get auto-generated tags
    const autoTags = await AutoTaggingService.getTags(req.body.description);
    
    const content = await Content.create({
      title: req.body.title,
      description: req.body.description,
      mediaUrl: req.file ? `/uploads/${req.file.filename}` : null,
      mediaType: req.file ? getMediaType(req.file.mimetype) : 'text',
      tags: [...(req.body.tags || []), ...autoTags],
      unlockDate: req.body.unlockDate,
      isEncrypted: req.body.isEncrypted || false,
      encryptionKey: req.body.encryptionKey || null,
      userId: req.userId
    });

    res.status(201).send(content);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Helper function to determine media type
function getMediaType(mimetype) {
  if (mimetype.startsWith('image/')) return 'image';
  if (mimetype.startsWith('video/')) return 'video';
  if (mimetype.startsWith('audio/')) return 'audio';
  return 'text';
}

exports.getAllContent = async (req, res) => {
  try {
    const contents = await Content.findAll({
      where: {
        userId: req.userId,
        unlockDate: {
          [Op.or]: [
            { [Op.lte]: new Date() },
            { [Op.is]: null }
          ]
        }
      }
    });
    res.send(contents);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    });

    if (!content) {
      return res.status(404).send({ message: "Content not found" });
    }

    // Check if content is time-locked
    if (content.unlockDate && content.unlockDate > new Date()) {
      return res.status(403).send({ message: "This content is locked until " + content.unlockDate });
    }

    res.send(content);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};