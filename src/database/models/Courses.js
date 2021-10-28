const {Model, DataTypes} = require('sequelize');
const connection = require('../index');

class Courses extends Model {};

Courses.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      requirement: {
        type: DataTypes.STRING,
        allowNull: false
      },
      workload: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: DataTypes.DECIMAL(10,2)
}, {
    sequelize: connection
});

module.exports = Courses;