const exec = require("./exec");
const config = require("../../db/config");

const migrate = () => {
  exec("rm", ["-f", config.test.storage]);
  exec("npx", ["sequelize-cli", "db:migrate"]);
};

module.exports = migrate;
