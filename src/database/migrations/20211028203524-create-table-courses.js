'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      requirement: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workload: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: Sequelize.DECIMAL(10,2)
    });
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('courses');
  }
};
