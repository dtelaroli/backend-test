const exec = require("./exec");

const seed = (name) => {
  exec("npx", ["sequelize-cli", "db:seed:undo"]);

  if (name) {
    exec("npx", ["sequelize-cli", "db:seed", "--seed", name]);
  } else {
    exec("npx", ["sequelize-cli", "db:seed:all"]);
  }
};

module.exports = seed;
