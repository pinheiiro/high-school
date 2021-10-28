const {Model, DataTypes} = require('sequelize');
const connection = require('../index');

class Class extends Model {}

Class.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    turma: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    sequelize: connection
});

module.exports = Class;