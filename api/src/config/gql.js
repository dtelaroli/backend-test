const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const db = require("../db/models");

const config = {
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    credentials: false,
  },
  context: async (args) => {
    return {
      ...args,
      db,
    };
  },

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  playground: true,
  introspection: true,
  tracing: true,
  engine: {
    reportSchema: true,
    graphVariant: "current",
  },
};

module.exports = config;
