"use strict";

const consts = require("./consts");

const CART_CREATE = consts.CART({ id: "n" });
const CART_UPDATE = consts.CART({ id: "m" });
const CART_DELETE = consts.CART({ id: "l" });
const SKU = consts.SKU({ id: "l", productId: "l" });
const SKU_2 = consts.SKU({ id: "m", productId: "l" });
const CART_ITEM = consts.CART_ITEM({ id: "l", cartId: "l", skuId: "l", itemAmount: SKU.price * 2 });
const CART_ITEM_2 = consts.CART_ITEM({ id: "m", cartId: "m", skuId: "m", itemQuantity: 1, itemAmount: 10.0 });
const PRODUCT = consts.PRODUCT({ id: "l" });

module.exports = {
  CART_UPDATE,
  CART_CREATE,
  CART_DELETE,
  CART_ITEM,
  CART_ITEM_2,
  SKU,
  SKU_2,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Carts", [CART_CREATE, CART_UPDATE, CART_DELETE]);
    await queryInterface.bulkInsert("Products", [PRODUCT]);
    await queryInterface.bulkInsert("Skus", [SKU, SKU_2]);
    await queryInterface.bulkInsert("CartItems", [CART_ITEM, CART_ITEM_2]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CartItems", null, {});
    await queryInterface.bulkDelete("Skus", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
