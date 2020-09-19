const { typeDefs } = require("graphql-scalars");
const global = require("./global");
const cart = require("./cart");

const types = global.concat(cart, typeDefs);

module.exports = types;
