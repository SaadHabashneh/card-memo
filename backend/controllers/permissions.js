const pool = require("../models/db");

const addPermission = (req, res) => {
  const { permission } = req.body;
  const query = `INSERT INTO permissions (permission) VALUES (?);`;
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

const addRolePermission = (req, res) => {
  const { role_id, permission_id } = req.body;
  const query = `INSERT INTO role_permission (role_id, permission_id) VALUES (?, ?);`;
  const data = [role_id, permission_id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Role permission added successfully",
        role_permission: result[0],
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
  addRolePermission,
};
