const {Model, DataTypes} = require('sequelize');
const connection = require('../index');

class Instructors extends Model {}

Instructors.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
         type: DataTypes.STRING(50),
         allowNull: false,
         unique: true
    },
    wage: {
         type: DataTypes.DECIMAL(10,2),
         allowNull: false
    },
    certificates: DataTypes.STRING
}, {
    sequelize: connection
});

module.exports = Instructors;