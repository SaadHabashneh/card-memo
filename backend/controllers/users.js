const pool = require("../models/db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password, role_id } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  const query =
    "INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?);";
  const data = [name, email.toLowerCase(), hashedPass, role_id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: result.rows,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        error: err.message,
      });
    });
};

const getUsers = (req, res) => {
  const query = `SELECT * FROM users WHERE role_id = 1 AND is_deleted = 0;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Users returned successfully",
        users: result[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    });
};

module.exports = {
  register,
  getUsers,
};
