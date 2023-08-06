'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Quizzes', [{
      question: "Susunan elektron valensi gas mulia di bawah ini adalah oktet, kecuali ...",
      a: "a. Xe",
      b: "b. He",
      c: "c. Ar",
      d: "d. Ne",
      answer: "b. He",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Unsur-unsur berikut membentuk ion positif, kecuali ...",
      a: "a. 11Na",
      b: "b. 19K",
      c: "c. 20Ca",
      d: "d. 37Rb",
      answer: "d. 37Rb",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Di antara unsur-unsur berikut, unsur yang paling stabil adalah ...",
      a: "a. 8P",
      b: "b. 9Q",
      c: "c. 10R",
      d: "d. 20T",
      answer: "c. 10R",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Konfigurasi elektron atom X: 2 8 5. Atom tersebut akan menjadi stabil apabila ...",
      a: "a. mengikat 3 elektron",
      b: "b. melepaskan 5 elektron",
      c: "c. mengikat 5 elektron",
      d: "d. melepaskan 3 elektron",
      answer: "a. mengikat 3 elektron",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Di antara pasangan senyawa berikut, yang berikatan kovalen adalah ...",
      a: "a. HCl",
      b: "b. KCl",
      c: "c. K2O",
      d: "d. MgO",
      answer: "a. HCl",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Cara untuk mendapatkan kestabilan atom unsur yang bernomor 6 adalah dengan ...",
      a: "a. melepaskan 4 elektron valensinya membentuk ion dengan muatan -4",
      b: "b. mengikat 4 elektron dari atom lain menjadi ion dengan dengan muatan -4",
      c: "c. melepaskan 4 elektron valensinya membentuk ion dengan muatan +4",
      d: "d. mengikat 4 elektron dari atom lain menjadi ion dengan dengan muatan +4",
      answer: "c. melepaskan 4 elektron valensinya membentuk ion dengan muatan +4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Ikatan ionik terdapat pada pasangan senyawa ...",
      a: "a. NaCl dan HCl",
      b: "b. HCl dan NH3",
      c: "c. NH3 dan SO3",
      d: "d. KOH dan NaCl",
      answer: "d. KOH dan NaCl",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Rumus kimia senyawa yang terbentuk jika unsur 15A berikatan dengan unsur 20B adalah ...",
      a: "a. AB",
      b: "b. AB2",
      c: "c. A2B",
      d: "d. A2B3",
      answer: "d. A2B3",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Atom 12A mempunyai ciri ...",
      a: "a. elektron valensi 4",
      b: "b. cenderung melepas 4 elektron",
      c: "c. terdapat 2 elektron pada kulit terluar",
      d: "d. cenderung menangkap 4 elektron",
      answer: "c. terdapat 2 elektron pada kulit terluar",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: "Diketahui nilai keelektronegatifan unsur-unsur H, F, Br, dan I berturut-turut 2,1; 4,0; 3,5; dan 2,5;. Molekul yang bersifat paling polar adalah ...",
      a: "a. HF",
      b: "b. HCl",
      c: "c. HBr",
      d: "d. HI",
      answer: "a. HF",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Compounds', null, {});
  }
};
