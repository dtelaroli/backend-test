const { typeDefs } = require("graphql-scalars");
global = require("./global");
const cart = require("./cart");

const types = global.concat(cart, typeDefs);

module.exports = types;
