const { cartBusiness } = require("../../business");

const db = require("../../db/models");
const { Cart, CartItem, Sku, sequelize } = db;
const { CART_EMPTY, CART, SKU, CART_ITEM_1 } = require("../../db/seeders/config");

describe("CartBusiness", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("find", () => {
    const spy = jest.spyOn(Cart, "create");

    it("Should return cart if exists", async () => {
      const result = await cartBusiness.find(db, CART.id);

      expect(result).not.toBe(null);
      const raw = result.get({ plain: true });
      expect(raw).toStrictEqual(CART);
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it("Should create cart if does not exists", async () => {
      const id = 2;

      const result = await cartBusiness.find(db, id);

      expect(result).not.toBe(null);
      expect(result.id).toBe(id);
      expect(Cart.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("addItem", () => {
    const spy = jest.spyOn(sequelize, "transaction");

    it("Should add product item to cart", async () => {
      const object = {
        cartId: CART_EMPTY.id,
        skuId: SKU.id,
        quantity: 1,
      };

      const cart = await Cart.findByPk(CART_EMPTY.id);

      expect(cart.totalAmount).toBe(CART_EMPTY.totalAmount);
      expect(cart.totalQuantity).toBe(CART_EMPTY.totalQuantity);

      const result = await cartBusiness.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART_EMPTY.id);
      expect(result.totalAmount).toBe(CART_ITEM_1.itemAmount);
      expect(result.totalQuantity).toBe(CART_ITEM_1.itemQuantity);

      expect(spy).toHaveBeenCalledTimes(1);
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

      const result = await cartBusiness.addItem(db, object);

      expect(result).not.toBe(null);
      expect(result.id).toBe(CART.id);
      expect(result.totalAmount).toBe(CART.totalAmount + CART_ITEM_1.itemAmount);
      expect(result.totalQuantity).toBe(CART.totalQuantity + CART_ITEM_1.itemQuantity);

      expect(spy).toHaveBeenCalledTimes(1);
    }, 30000);
  });
});
