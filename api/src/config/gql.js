const responseCachePlugin = require("apollo-server-plugin-response-cache");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const db = require("../db/models");

const config = {
  typeDefs,
  resolvers,
  cacheControl: {
    // Default cache max age 5 seconds
    defaultMaxAge: 5,
  },
  cors: {
    // Cors allowing all origins
    origin: "*",
    credentials: false,
  },
  context: async (args) => {
    return {
      ...args,
      // Inject sequelize instance
      db,
    };
  },
  // Plugin for cache responses
  plugins: [responseCachePlugin()],

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
