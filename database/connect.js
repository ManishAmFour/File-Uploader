const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "manish-tewatia",
  password: "manishalka1234",
  port: 3000,
  database: "ExpressOrm",
});

module.exports = pool;
