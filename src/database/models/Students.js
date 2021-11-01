const { Model, DataTypes } = require('sequelize');
const connection = require('../index');

class Students extends Model { }

Students.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING(14)
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: connection
});

module.exports = Students;