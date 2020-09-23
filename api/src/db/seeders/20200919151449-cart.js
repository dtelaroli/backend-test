"use strict";

const consts = require("./consts");

const CART = consts.CART({ id: "j" });

module.exports = {
  CART,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Carts", [CART]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
