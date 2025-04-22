module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define("content", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      mediaUrl: {
        type: Sequelize.STRING
      },
      mediaType: {
        type: Sequelize.ENUM('image', 'video', 'audio', 'text'),
        defaultValue: 'text'
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      unlockDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isEncrypted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      encryptionKey: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Content;
  };