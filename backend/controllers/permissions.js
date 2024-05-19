const pool = require("../models/db");

const addPermission = (req, res) => {
  const { permission } = req.body;
  const query = `INSERT INTO permissions (permission) VALUES (?)`;
  const data = [permission];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Permission added successfully",
        permission: result[0],
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
  addPermission,
};
