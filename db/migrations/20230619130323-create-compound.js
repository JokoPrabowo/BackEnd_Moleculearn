'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      z1: {
        type: Sequelize.INTEGER
      },
      x1: {
        type: Sequelize.STRING
      },
      n1: {
        type: Sequelize.INTEGER
      },
      z2: {
        type: Sequelize.INTEGER
      },
      x2: {
        type: Sequelize.STRING
      },
      n2: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compounds');
  }
};