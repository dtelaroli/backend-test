const responseCachePlugin = require("apollo-server-plugin-response-cache");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const db = require("../db/models");
const { logger } = require("../utils");
const { ENV, REPORT_SCHEMA = false, DEBUG = false } = process.env;
const tracing = DEBUG === "true";
const path = `/${ENV}/graphql`;

const config = {
  typeDefs,
  resolvers,
  path,
  subscriptionsPath: path,
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
  playground: {
    endpoint: path,
  },
  tracing,
  engine: {
    reportSchema: REPORT_SCHEMA,
    graphVariant: "current",
  },
};

module.exports = config;
