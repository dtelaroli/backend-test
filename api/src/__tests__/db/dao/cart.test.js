const { cartDAO } = require("../../../db/dao");
const { seed } = require("../../helpers");

const db = require("../../../db/models");
const { Cart, sequelize } = db;
const { CART_EMPTY, CART, SKU, CART_ITEM_1, CART_ITEM_2 } = require("../../../db/seeders/consts");
const transaction = jest.spyOn(sequelize, "transaction");

describe("CartDAO", () => {
  beforeEach(() => {
    seed();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("find", () => {
    const spy = jest.spyOn(Cart, "create");

    it("Should return cart if exists", async () => {
      const result = await cartDAO.find(db, CART.id);

      expect(result).not.toBe(null);
      const raw = result.get({ plain: true });
      expect(raw).toStrictEqual(CART);
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it("Should create cart if does not exists", async () => {
      const id = 2;

      const result = await cartDAO.find(db, id);

      expect(result).not.toBe(null);
      expect(result.id).toBe(id);
      expect(Cart.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("addItem", () => {
    it("Should add product item to cart", async () => {
      const object = {
        cartId: CART_EMPTY.id,
        skuId: SKU.id,
        quantity: 1,
      };

      const cart = await Cart.findByPk(CART_EMPTY.id);

      expect(cart.totalAmount).toBe(CART_EMPTY.totalAmount);
      expect(cart.totalQuantity).toBe(CART_EMPTY.totalQuantity);

      const result = await cartDAO.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_EMPTY.id);
      expect(result.totalAmount).toBe(CART_ITEM_1.itemAmount);
      expect(result.totalQuantity).toBe(CART_ITEM_1.itemQuantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should increment quantity when sku exists", async () => {
      const object = {
        cartId: CART.id,
        skuId: SKU.id,
        quantity: 1,
      };

      const cart = await Cart.findByPk(CART.id);

      expect(cart.totalAmount).toBe(CART.totalAmount);
      expect(cart.totalQuantity).toBe(CART.totalQuantity);

      const result = await cartDAO.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART.totalAmount + CART_ITEM_1.itemAmount);
      expect(result.totalQuantity).toBe(CART.totalQuantity + CART_ITEM_1.itemQuantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should return error if quantity unavailable", async () => {
      const object = {
        cartId: CART.id,
        skuId: SKU.id,
        quantity: 11,
      };

      const cart = await Cart.findByPk(CART.id);

      expect(cart.totalAmount).toBe(CART.totalAmount);
      expect(cart.totalQuantity).toBe(CART.totalQuantity);

      expect(cartDAO.addItem(db, object)).rejects.toThrow("Quantity unavailable");
    });
  });

  describe("updateItem", () => {
    it("Should add product item to cart", async () => {
      const object = {
        cartId: CART_EMPTY.id,
        skuId: SKU.id,
        quantity: 1,
      };

      const cart = await Cart.findByPk(CART_EMPTY.id);

      expect(cart.totalAmount).toBe(CART_EMPTY.totalAmount);
      expect(cart.totalQuantity).toBe(CART_EMPTY.totalQuantity);

      const result = await cartDAO.updateItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_EMPTY.id);
      expect(result.totalAmount).toBe(CART_ITEM_1.itemAmount);
      expect(result.totalQuantity).toBe(CART_ITEM_1.itemQuantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should update quantity when sku exists", async () => {
      const object = {
        cartId: CART.id,
        skuId: SKU.id,
        quantity: 5,
      };

      const cart = await Cart.findByPk(CART.id);

      expect(cart.totalAmount).toBe(CART.totalAmount);
      expect(cart.totalQuantity).toBe(CART.totalQuantity);

      const result = await cartDAO.updateItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART_ITEM_2.itemAmount + object.quantity * SKU.price);
      expect(result.totalQuantity).toBe(CART_ITEM_2.itemQuantity + object.quantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should return error if quantity unavailable", async () => {
      const object = {
        cartId: CART.id,
        skuId: SKU.id,
        quantity: 11,
      };

      const cart = await Cart.findByPk(CART.id);

      expect(cart.totalAmount).toBe(CART.totalAmount);
      expect(cart.totalQuantity).toBe(CART.totalQuantity);

      expect(cartDAO.updateItem(db, object)).rejects.toThrow("Quantity unavailable");
    });
  });

  describe("deleteItem", () => {
    it("Should delete item from cart", async () => {
      const object = {
        cartId: CART.id,
        skuId: SKU.id,
      };

      const cart = await Cart.findByPk(CART.id);

      expect(cart.totalAmount).toBe(CART.totalAmount);
      expect(cart.totalQuantity).toBe(CART.totalQuantity);

      const result = await cartDAO.deleteItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART_ITEM_2.itemAmount);
      expect(result.totalQuantity).toBe(CART_ITEM_2.itemQuantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });
  });
});
