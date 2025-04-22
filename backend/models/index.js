const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.users = require('./user.model.js')(sequelize, Sequelize);
db.content = require('./content.model.js')(sequelize, Sequelize);
db.family = require('./family.model.js')(sequelize, Sequelize);

// Define relationships
db.users.hasMany(db.content, { foreignKey: 'userId' });
db.content.belongsTo(db.users, { foreignKey: 'userId' });

db.users.hasMany(db.family, { foreignKey: 'userId' });
db.family.belongsTo(db.users, { foreignKey: 'userId' });

module.exports = db;