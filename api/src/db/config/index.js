const logger = require("pino")();
const { DB_HOST: host, DB_NAME: database, DB_USERNAME: username, DB_PASSWORD: password } = process.env;

const defaultConfig = {
  host,
  database,
  username,
  password,
  dialect: "postgres",
  logging: (sql) => logger.info({ sql }),
  options: {},
};

const config = {
  development: defaultConfig,
  test: {
    dialect: "sqlite",
    storage: "/tmp/db.sqlite",
  },
  production: defaultConfig,
};

module.exports = config;
