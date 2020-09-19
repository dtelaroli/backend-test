const scalar = require("./scalar");

const cart = require("./cart");
const product = require("./product");
const sku = require("./sku");

const resolvers = {
  ...scalar,
  ...product.root,
  ...cart.root,
  Query: {
    ...cart.Query,
    ...product.Query,
  },
  Mutation: {
    ...cart.Mutation,
    ...product.Mutation,
    ...sku.Mutation,
  },
};

module.exports = resolvers;
