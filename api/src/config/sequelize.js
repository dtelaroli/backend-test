const { DB_HOST: host, DB_NAME: database, DB_USERNAME: username, DB_PASSWORD: password } = process.env;

const defaultConfig = {
  host,
  database,
  username,
  password,
  dialect: "postgres",
};

const config = {
  development: defaultConfig,
  test: defaultConfig,
  production: defaultConfig,
};

module.exports = config;
