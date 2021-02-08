const Sequelize = require('sequelize');

// db-name, login, password
const sequelize = new Sequelize('node-complete', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
