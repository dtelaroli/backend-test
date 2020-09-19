const { spawnSync } = require("child_process");

const exec = (cmd, args) => {
  const b = spawnSync(cmd, args, { stdio: "pipe", encoding: "utf-8" });
  console.log(b.output.join("\n"));
};

exec("rm", ["-f", "/tmp/db.sqlite"]);
exec("npx", ["sequelize-cli", "db:migrate"]);
exec("npx", ["sequelize-cli", "db:seed:all"]);
