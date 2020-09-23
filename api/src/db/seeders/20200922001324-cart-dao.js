"use strict";

const consts = require("./consts");

const CART = consts.CART({});
const CART_UPDATE = consts.CART({ id: "o" });
const SKU = consts.SKU({});
const CART_ITEM = consts.CART_ITEM({ itemAmount: SKU.price * 2 });
const CART_ITEM_UPDATE = consts.CART_ITEM({ id: "o", cartId: "o", skuId: "o" });
const CART_ITEM_2 = consts.CART_ITEM({ id: "b", skuId: "b", itemQuantity: 1, itemAmount: 10.0 });
const SKU_2 = consts.SKU({ id: "b" });
const SKU_UPDATE = consts.SKU({ id: "o" });
const CART_EMPTY = consts.CART_EMPTY({});
const PRODUCT = consts.PRODUCT({});

module.exports = {
  CART,
  CART_UPDATE,
  CART_EMPTY,
  CART_ITEM,
  CART_ITEM_2,
  CART_ITEM_UPDATE,
  SKU,
  SKU_2,
  SKU_UPDATE,
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Carts", [CART, CART_EMPTY, CART_UPDATE]);
    await queryInterface.bulkInsert("Products", [PRODUCT]);
    await queryInterface.bulkInsert("Skus", [SKU, SKU_2, SKU_UPDATE]);
    await queryInterface.bulkInsert("CartItems", [CART_ITEM, CART_ITEM_2, CART_ITEM_UPDATE]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CartItems", null, {});
    await queryInterface.bulkDelete("Skus", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
