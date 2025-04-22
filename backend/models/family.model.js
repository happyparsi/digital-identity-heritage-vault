module.exports = (sequelize, Sequelize) => {
    const Family = sequelize.define("family", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      relationship: {
        type: Sequelize.STRING,
        allowNull: false
      },
      generation: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      birthDate: {
        type: Sequelize.DATE
      },
      isAlive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    });
  
    return Family;
  };
  