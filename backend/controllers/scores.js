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

module.exports = {
  addScore,
};
