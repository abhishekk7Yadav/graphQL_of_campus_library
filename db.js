// db.js -- one shared connection pool to MySQL
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD || '1234', // <-- change this if your root password differs
  database: 'gqldemo',
});

module.exports = pool;
