const gqlClient = require("./gql-client");
const migrate = require("./migrate");
const seed = require("./seed");

module.exports = {
  ...gqlClient,
  migrate,
  seed,
};
