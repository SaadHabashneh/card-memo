const pool = require("../models/db");

const addScore = (req, res) => {
  const { score, user_id } = req.body;
  const query = `INSERT INTO scores (score, user_id) VALUES (?, ?);`;
  const data = [score, user_id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Score added successfully",
        score: result[0],
      });
    })
    .catch((err) => {
      res.status(201).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    });
};

const getAllScores = (req, res) => {
  const query = `SELECT users.username, scores.id, scores.score  FROM users JOIN scores ON users.id = scores.user_id ORDER BY scores.score DESC;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All scores",
        scores: result[0],
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

const getUserScores = (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM scores WHERE user_id = (?) ORDER BY score DESC;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "All your scores",
        scores: result[0],
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

const deleteScoreById = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM scores WHERE id = (?);`;
  const data = id;
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Score deleted successfully",
        score: result[0],
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
  addScore,
  getAllScores,
  getUserScores,
  deleteScoreById,
};
