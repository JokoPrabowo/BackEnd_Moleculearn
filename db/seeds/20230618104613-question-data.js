'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Quizzes', [{
      question: "Susunan elektron valensi gas mulia di bawah ini adalah oktet, kecuali ...",
      a: "Xe",
      b: "Kr",
      c: "Ar",
      d: "Ne",
      e: "He",
      answer: "He",
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
      question: "Unsur-unsur berikut membentuk ion positif, kecuali ...",
      a: "(_11^)Na",
      b: "(_19^)K",
      c: "(_20^)Ca",
      d: "(_35^)Br",
      e: "(_37^)Rb",
      answer: "(_37^)Rb",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
