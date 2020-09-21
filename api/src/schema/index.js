const { typeDefs } = require("graphql-scalars");
const globalScheme = require("./global");
const cart = require("./cart");

const types = globalScheme.concat(cart, typeDefs);

module.exports = types;
