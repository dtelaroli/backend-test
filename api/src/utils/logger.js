const pino = require("pino");
const { DEBUG = false } = process.env;
const level = DEBUG === "true" ? "debug" : "info";

const logger = pino({ level });

module.exports = logger;
