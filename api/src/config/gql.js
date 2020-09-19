const responseCachePlugin = require("apollo-server-plugin-response-cache");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const db = require("../db/models");
const logger = require("pino")();
const { DEBUG = false } = process.env;
const trace = DEBUG === "true";

const config = {
  typeDefs,
  resolvers,
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
  cacheControl: {
    // Default cache max age 5 seconds
    defaultMaxAge: 5,
  },
  formatError: (error) => {
    logger.error(error);
    return error;
  },
  // Plugin for cache responses
  // Its possible combine this plugin with redis plugin to get a share cache data
  plugins: [responseCachePlugin()],

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  introspection: true,
  playground: trace,
  tracing: trace,
  engine: {
    reportSchema: trace,
    graphVariant: "current",
  },
};

module.exports = config;
