const { cartDAO } = require("../../../db/dao");
const { seed } = require("../../helpers");

const db = require("../../../db/models");
const { Cart, sequelize } = db;
const transaction = jest.spyOn(sequelize, "transaction");

const seedData = require("../../../db/seeders/20200922001324-cart-dao");
const { CART, CART_UPDATE, CART_EMPTY, CART_ITEM, CART_ITEM_UPDATE, CART_ITEM_2, SKU, SKU_2, SKU_UPDATE } = seedData;

describe("CartDAO", () => {
  beforeEach(() => {
    seed("20200922001324-cart-dao");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("findOrCreate", () => {
    const spy = jest.spyOn(Cart, "create");

    it("Should return cart if exists", async () => {
      const result = await cartDAO.findOrCreate(db, CART.id);

      expect(result).not.toBe(null);
      expect(result.id).toStrictEqual(CART.id);
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it("Should create cart if does not exists", async () => {
      const id = "2";

      const result = await cartDAO.findOrCreate(db, id);

      expect(result).not.toBe(null);
      expect(result.id).toBe(id);
      expect(Cart.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("addItem", () => {
    it("Should add product item to cart", async () => {
      const object = {
        cartId: CART_EMPTY.id,
        skuId: SKU_2.id,
        quantity: 1,
      };

      const result = await cartDAO.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_EMPTY.id);
      expect(result.totalAmount).toBe(CART_EMPTY.totalAmount + SKU_2.price);
      expect(result.totalQuantity).toBe(CART_EMPTY.totalQuantity + object.quantity);
      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should increment quantity when sku exists", async () => {
      const object = {
        cartId: CART_ITEM.cartId,
        skuId: CART_ITEM.skuId,
        quantity: 1,
      };

      const result = await cartDAO.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART.totalAmount + SKU.price);
      expect(result.totalQuantity).toBe(CART.totalQuantity + object.quantity);
      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should return error if quantity unavailable", async () => {
      const object = {
        cartId: CART_ITEM.cartId,
        skuId: CART_ITEM.skuId,
        quantity: 11,
      };

      const promise = cartDAO.addItem(db, object);
      expect(promise).rejects.toThrow("Quantity unavailable");
    });
  });

  describe("updateItem", () => {
    it("Should add product item to cart", async () => {
      const object = {
        cartId: CART_EMPTY.id,
        skuId: SKU_2.id,
        quantity: 1,
      };

      const result = await cartDAO.updateItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_EMPTY.id);
      expect(result.totalAmount).toBe(SKU_2.price);
      expect(result.totalQuantity).toBe(object.quantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should update quantity when sku exists", async () => {
      const object = {
        cartId: CART_ITEM_UPDATE.cartId,
        skuId: CART_ITEM_UPDATE.skuId,
        quantity: 5,
      };

      const result = await cartDAO.updateItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_UPDATE.id);
      expect(result.totalAmount).toBe(object.quantity * SKU_UPDATE.price);
      expect(result.totalQuantity).toBe(object.quantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });

    it("Should return error if quantity unavailable", async () => {
      const object = {
        cartId: CART_ITEM.cartId,
        skuId: CART_ITEM.skuId,
        quantity: 11,
      };

      expect(cartDAO.updateItem(db, object)).rejects.toThrow("Quantity unavailable");
    });
  });

  describe("deleteItem", () => {
    it("Should delete item from cart", async () => {
      const object = {
        cartId: CART_ITEM.cartId,
        skuId: CART_ITEM.skuId,
      };

      const result = await cartDAO.deleteItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART_ITEM_2.itemAmount);
      expect(result.totalQuantity).toBe(CART_ITEM_2.itemQuantity);

      expect(transaction).toHaveBeenCalledTimes(1);
    });
  });
}, 300000);
