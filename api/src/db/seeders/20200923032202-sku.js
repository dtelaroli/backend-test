"use strict";

const consts = require("./consts");

const SKU = consts.SKU({ id: "d", productId: "d" });
const SKU_UPDATE = consts.SKU({ id: "e", productId: "d" });
const SKU_DELETE = consts.SKU({ id: "F", productId: "d" });
const PRODUCT = consts.PRODUCT({ id: "d" });

module.exports = {
  SKU,
  SKU_UPDATE,
  SKU_DELETE,
  PRODUCT,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [PRODUCT]);
    await queryInterface.bulkInsert("Skus", [SKU_UPDATE, SKU_DELETE]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Skus", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
