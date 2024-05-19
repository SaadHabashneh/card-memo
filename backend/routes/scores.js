const express = require("express");

const { addScore, getAllScores } = require("../controllers/scores");

const scoresRouter = express.Router();

scoresRouter.post("", addScore);
scoresRouter.get("", getAllScores);

module.exports = scoresRouter;