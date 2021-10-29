'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { 
     return queryInterface.createTable('instructors', { 
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
       },
       name: {
        type: Sequelize.STRING(50),
        allowNull: false
       },
       email: {
         type: Sequelize.STRING(50),
         allowNull: false,
         unique: true
       },
       wage: {
         type: Sequelize.DECIMAL(10,2),
         allowNull: false
       },
       certificates: Sequelize.STRING
     });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instructors');
  }
};
