const scalar = require("./scalar");

const cart = require("./cart");
const product = require("./product");
const sku = require("./sku");

const resolvers = {
  ...cart,
  ...scalar,
  Mutation: {
    ...cart.Mutation,
    ...product.Mutation,
    ...sku.Mutation,
  },
};

module.exports = resolvers;
