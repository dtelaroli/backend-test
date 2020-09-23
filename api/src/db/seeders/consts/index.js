const DATE = "2020-01-01T00:00:00.000Z";

const CART_EMPTY = ({ id = "b" }) => ({
  id,
  totalQuantity: 0,
  totalAmount: 0.0,
  createdAt: DATE,
  updatedAt: DATE,
});

const CART = ({ id = "a", totalQuantity = 3, totalAmount = 30.0 }) => ({
  id,
  totalQuantity,
  totalAmount,
  createdAt: DATE,
  updatedAt: DATE,
});

const PRODUCT = ({ id = "a" }) => ({
  id,
  name: "product1",
  image: "image1.jpg",
  createdAt: DATE,
  updatedAt: DATE,
});

const SKU = ({ id = "a", productId = "a", price = 10.0 }) => ({
  id,
  sku: "111",
  inventory: 10,
  price,
  productId,
  createdAt: DATE,
  updatedAt: DATE,
});

const CART_ITEM = ({ id = "a", cartId = "a", skuId = "a", itemQuantity = 2, itemAmount = 20.0 }) => ({
  id,
  cartId,
  skuId,
  itemQuantity,
  itemAmount,
  createdAt: DATE,
  updatedAt: DATE,
});

module.exports = {
  CART_EMPTY,
  CART,
  PRODUCT,
  SKU,
  CART_ITEM,
};
