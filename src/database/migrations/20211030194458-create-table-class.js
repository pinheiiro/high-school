'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('class', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      initial_date: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      workload: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      instructors_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'instructors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      courses_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('class')
  }
};
