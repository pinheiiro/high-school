const { Model, DataTypes } = require('sequelize');
const connection = require('../index');
const Courses = require('./Courses');
const Instructors = require('./Instructors');

class Class extends Model { }

Class.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    initial_date: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    workload: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    instructors_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'instructors',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onUpdate: 'RESTRICT'
    },
    courses_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    sequelize: connection
});

Class.belongsTo(Instructors, {foreignKey: 'instructors_id', as: 'instructor'});
Class.belongsTo(Courses, {foreignKey: 'courses_id', as: 'newcourse'});

module.exports = Class;