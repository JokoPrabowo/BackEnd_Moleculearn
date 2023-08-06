'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Compounds', [{
      z1: 1,
      x1: "H",
      n1: 2,
      z2: 8,
      x2: "O",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691019792/Compound/H2O_dszj1d.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 17,
      x1: "Cl",
      n1: 2,
      z2: 8,
      x2: "O",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691069050/Compound/Cl2O_be4wae.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 7,
      x1: "N",
      n1: 1,
      z2: 9,
      x2: "F",
      n2: 3,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691072402/Compound/NF3_ajvx7q.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 14,
      x1: "Si",
      n1: 1,
      z2: 8,
      x2: "O",
      n2: 2,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691072827/Compound/SiO2_roopzr.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 5,
      x1: "B",
      n1: 1,
      z2: 17,
      x2: "Cl",
      n2: 3,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691077482/Compound/BCl3_c5hlbs.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 5,
      x1: "B",
      n1: 1,
      z2: 9,
      x2: "F",
      n2: 3,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691077719/Compound/BF3_tkgeq5.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 6,
      x1: "C",
      n1: 1,
      z2: 17,
      x2: "Cl",
      n2: 4,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691078322/Compound/CCl4_zndus4.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 6,
      x1: "C",
      n1: 1,
      z2: 9,
      x2: "F",
      n2: 4,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691078511/Compound/CF4_h1fyzs.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 6,
      x1: "C",
      n1: 1,
      z2: 16,
      x2: "S",
      n2: 2,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691078761/Compound/CS2_nnundd.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 1,
      x1: "H",
      n1: 1,
      z2: 17,
      x2: "Cl",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691078897/Compound/HCl_axq6jl.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 19,
      x1: "K",
      n1: 2,
      z2: 8,
      x2: "O",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691082825/Compound/K2O_sg2ang.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 19,
      x1: "K",
      n1: 1,
      z2: 17,
      x2: "Cl",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691083306/Compound/KCl_hqu2tf.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 19,
      x1: "K",
      n1: 1,
      z2: 9,
      x2: "F",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691083477/Compound/KF_d2zwyx.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 3,
      x1: "Li",
      n1: 1,
      z2: 35,
      x2: "Br",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691084237/Compound/LiBr_synjn9.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 3,
      x1: "Li",
      n1: 1,
      z2: 9,
      x2: "F",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691084462/Compound/LiF_qpnk6b.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 12,
      x1: "Mg",
      n1: 1,
      z2: 35,
      x2: "Br",
      n2: 2,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691084669/Compound/MgBr2_pozgmd.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 12,
      x1: "Mg",
      n1: 1,
      z2: 8,
      x2: "O",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691084961/Compound/MgO_yprgnn.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 11,
      x1: "Na",
      n1: 1,
      z2: 17,
      x2: "Cl",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691085210/Compound/NaCl_s5ebzf.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 37,
      x1: "Rb",
      n1: 2,
      z2: 8,
      x2: "O",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691089325/Compound/Rb2O_e73mor.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      z1: 3,
      x1: "Li",
      n1: 3,
      z2: 7,
      x2: "N",
      n2: 1,
      image: "https://res.cloudinary.com/drrhgbjqe/image/upload/v1691089441/Compound/Li3N_mpxmia.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
