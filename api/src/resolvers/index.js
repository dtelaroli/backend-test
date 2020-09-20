const _ = require("lodash");
const scalar = require("./scalar");
const cart = require("./cart");
const product = require("./product");
const sku = require("./sku");

const resolvers = _.merge(scalar, cart, product, sku);

module.exports = resolvers;
