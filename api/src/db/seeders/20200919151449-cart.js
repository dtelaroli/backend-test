"use strict";

const { CART, CART_EMPTY, CART_ITEM_1, CART_ITEM_2, SKU, SKU_2, PRODUCT } = require("./consts");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Carts", [CART, CART_EMPTY]);
    await queryInterface.bulkInsert("Products", [PRODUCT]);
    await queryInterface.bulkInsert("Skus", [SKU, SKU_2]);
    await queryInterface.bulkInsert("CartItems", [CART_ITEM_1, CART_ITEM_2]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CartItems", null, {});
    await queryInterface.bulkDelete("Skus", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
