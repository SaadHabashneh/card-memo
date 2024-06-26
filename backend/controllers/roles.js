const pool = require("../models/db");

const createRole = (req, res) => {
  const { role } = req.body;
  const query = `INSERT INTO roles (role) VALUES (?);`;
  const data = [role];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "role created successfully",
        role: result[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: err.message,
      });
    });
};

module.exports = {
  createRole,
};
