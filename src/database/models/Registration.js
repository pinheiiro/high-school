const { Model, DataTypes } = require('sequelize');
const connection = require('../index');
const Class = require('./Class');
const Students = require('./Students');

class Registration extends Model { };

Registration.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date_registration: {
        type: DataTypes.DATE,
        allowNull: false
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'class',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    students_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    sequelize: connection
});

Registration.belongsTo(Class, {foreignKey: 'class_id', as: 'classes'});
Registration.belongsTo(Students, {foreignKey: 'students_id', as: 'student'});

module.exports = Registration;