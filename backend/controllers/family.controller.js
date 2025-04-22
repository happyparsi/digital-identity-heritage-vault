const db = require("../models");
const Family = db.family;

exports.createFamilyMember = async (req, res) => {
  try {
    const familyMember = await Family.create({
      name: req.body.name,
      relationship: req.body.relationship,
      generation: req.body.generation,
      birthDate: req.body.birthDate,
      isAlive: req.body.isAlive,
      userId: req.userId
    });

    res.send(familyMember);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getFamilyTree = async (req, res) => {
  try {
    const familyMembers = await Family.findAll({
      where: {
        userId: req.userId
      },
      order: [
        ['generation', 'DESC']
      ]
    });

    // Transform to tree structure
    const tree = buildFamilyTree(familyMembers);
    res.send(tree);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

function buildFamilyTree(members) {
  // Basic implementation - can be enhanced
  const tree = {};
  
  members.forEach(member => {
    if (!tree[member.generation]) {
      tree[member.generation] = [];
    }
    tree[member.generation].push(member);
  });
  
  return tree;
}