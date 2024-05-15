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

module.exports = {
  register,
};
