const { spawnSync } = require("child_process");

const { NODE_ENV } = process.env;
const isTest = NODE_ENV === "test";

const exec = (cmd, args) => {
  const b = spawnSync(cmd, args, { stdio: "pipe", encoding: "utf-8" });
  if (!isTest) {
    console.log(b.output.join("\n"));
  }
};

module.exports = exec;
