const mysql = require("mysql2/promise");
const fs = require("fs");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "card-memo",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error connecting to the database:", err);
  }
  console.log("Database is connected");
  connection.release();
});

const sql = fs.readFileSync("./models/db.sql").toString();

// pool
//   .execute(sql)
//   .then(() => {
//     console.log("SQL script executed successfully");
//   })
//   .catch((err) => {
//     console.error("Error executing the SQL script:", err);
//   });

module.exports = pool;
