const { spawnSync } = require("child_process");
const config = require("../config");

const exec = (cmd, args) => {
  const b = spawnSync(cmd, args, { stdio: "pipe", encoding: "utf-8" });
  console.log(b.output.join("\n"));
};

const migrate = () => {
  exec("rm", ["-f", config.test.storage]);
  exec("npx", ["sequelize-cli", "db:migrate"]);
};

const seed = () => {
  exec("npx", ["sequelize-cli", "db:seed:undo"]);
  exec("npx", ["sequelize-cli", "db:seed:all"]);
};

module.exports = {
  migrate,
  seed,
};
