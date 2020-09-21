const DATE = new Date("2020-01-01T00:00:00.000Z");
const CART_ID = "11111111-1111-1111-1111-111111111111";
const SKU_ID = "11111111-1111-1111-1111-111111111112";
const PRODUCT_ID = "11111111-1111-1111-1111-111111111113";

const consts = {
  DATE,
  CART: {
    id: CART_ID,
    totalQuantity: 3,
    totalAmount: 20.0,
    createdAt: DATE,
    updatedAt: DATE,
  },
  PRODUCT: {
    id: PRODUCT_ID,
    name: "product1",
    image: "image1.jpg",
    createdAt: DATE,
    updatedAt: DATE,
  },
  SKU: {
    id: SKU_ID,
    sku: "123",
    inventory: 10,
    price: 10.0,
    productId: PRODUCT_ID,
    createdAt: DATE,
    updatedAt: DATE,
  },
  SKU_2: {
    id: "11111111-1111-1111-1111-111111111117",
    sku: "456",
    inventory: 10,
    price: 5.0,
    productId: PRODUCT_ID,
    createdAt: DATE,
    updatedAt: DATE,
  },
  CART_EMPTY: {
    id: "11111111-1111-1111-1111-111111111114",
    totalQuantity: 0,
    totalAmount: 0.0,
    createdAt: DATE,
    updatedAt: DATE,
  },
  CART_ITEM_1: {
    id: "11111111-1111-1111-1111-111111111115",
    cartId: CART_ID,
    skuId: SKU_ID,
    itemQuantity: 1,
    itemAmount: 10.0,
    createdAt: DATE,
    updatedAt: DATE,
  },
  CART_ITEM_2: {
    id: "11111111-1111-1111-1111-111111111116",
    cartId: CART_ID,
    skuId: "11111111-1111-1111-1111-111111111117",
    itemQuantity: 2,
    itemAmount: 10.0,
    createdAt: DATE,
    updatedAt: DATE,
  },
};

module.exports = consts;
