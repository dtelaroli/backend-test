const { ApolloServer } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing"); 
const config = require("../../config");

const server = new ApolloServer(config.gql);
const gqlClient = createTestClient(server);

module.exports = gqlClient;
