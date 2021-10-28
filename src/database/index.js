const Sequelize = require('sequelize');
const configDB = require('../config/database');
const Student = require('./models/Student');

const connection = new Sequelize(configDB);

Student.init(connection);

module.exports = connection;