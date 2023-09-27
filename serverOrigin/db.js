const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5431,
  database: "perntodo"
});

module.exports = pool;
