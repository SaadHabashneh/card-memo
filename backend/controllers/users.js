const pool = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, role_id } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  const query =
    "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?, ?);";
  const data = [username, email.toLowerCase(), hashedPass, role_id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: result[0],
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

const login = (req, res) => {
  const {email, password} = req.body;
  const query = `SELECT * FROM users WHERE email = (?);`;
  const data = [email.toLowerCase()];
  pool
    .query(query, data)
    .then((result) => {
      if (result[0].length) {
        bcrypt.compare(password, result[0][0].password, (err, response) => {
          if (err) res.json(err.message);
          if (response) {
            const payload = {
              userId: result[0][0].id,
              role: result[0][0].role_id
            };
            const secret = process.env.SECRET;
            const options = { expiresIn: "12h" };
            const token = jwt.sign(payload, secret, options);
            if (token) {
              return res.status(200).json({
                token,
                success: true,
                message: `Login success`,
                userId: result[0][0].id,
                roleId: result[0][0].role_id
              });
            } else {
              throw Error;
            }
          } else {
            res.status(403).json({
              success: false,
              message: `The email doesn't exist or the password you've entered is incorrect`
            });
          }
        });
      } else throw Error;
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "The email doesn't exist",
        error: err.message
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

const deleteUserById = (req, res) => {
  const { id } = req.params;
  const query = `UPDATE users SET is_deleted = 1 WHERE id = ?;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "User deleted successfully",
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

const viewDeletedUsers = (req, res) => {
  const query = `SELECT * FROM users WHERE is_deleted = 1;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All the deleted users",
        users: result[0],
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

const reinstateUserById = (req, res) => {
  const { id } = req.params;
  const query = `UPDATE users SET is_deleted = 0 WHERE id = ?;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "User reinstated successfully",
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
  register,
  login,
  getUsers,
  deleteUserById,
  viewDeletedUsers,
  reinstateUserById,
};
