const {Model, DataTypes} = require('sequelize');
//const connection = require('../index');

class Student extends Model {
    static init(sequelize) {
        super.init({
            matricula: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
              },
              nome: {
                type: DataTypes.STRING,
                allowNull: false
              },
              cpf: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
              },
              idade: {
                type: DataTypes.INTEGER,
                allowNull: false
              }
        }, {
            sequelize
        });
    }
}

module.exports = Student;
