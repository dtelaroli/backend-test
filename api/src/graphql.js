const { ApolloServer } = require("apollo-server-lambda");
const config = require("./config");

const server = new ApolloServer(config.gql);

exports.handler = server.createHandler();
