const exec = require("./exec");

const seed = () => {
  exec("npx", ["sequelize-cli", "db:seed:undo"]);
  exec("npx", ["sequelize-cli", "db:seed:all"]);
};

module.exports = seed;
