const express = require("express");

const { addScore, getAllScores, getUserScores, deleteScoreById } = require("../controllers/scores");

const scoresRouter = express.Router();

scoresRouter.post("", addScore);
scoresRouter.get("", getAllScores);
scoresRouter.get("/:id", getUserScores);
scoresRouter.delete("/:id", deleteScoreById);

module.exports = scoresRouter;