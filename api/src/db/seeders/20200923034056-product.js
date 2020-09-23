"use strict";

const consts = require("./consts");

const PRODUCT = consts.PRODUCT({ id: "g" });
const PRODUCT_UPDATE = consts.PRODUCT({ id: "h" });
const PRODUCT_DELETE = consts.PRODUCT({ id: "i" });

module.exports = {
  PRODUCT,
  PRODUCT_UPDATE,
  PRODUCT_DELETE,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [PRODUCT_UPDATE, PRODUCT_DELETE]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
