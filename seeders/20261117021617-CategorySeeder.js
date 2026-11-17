"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          nama: "Snack",
          deskripsi: "Makanan ringan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Drink",
          deskripsi: "Aneka minuman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Dishes",
          deskripsi: "Makanan berat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
