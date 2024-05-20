const express = require("express");

const { addScore, getAllScores, getUserScores, deleteScoreById } = require("../controllers/scores");
const authentication = require("../middlewares/authentication");

const scoresRouter = express.Router();

scoresRouter.post("", authentication, addScore);
scoresRouter.get("", getAllScores);
scoresRouter.get("/:id", authentication, getUserScores);
scoresRouter.delete("/:id", authentication, deleteScoreById);

module.exports = scoresRouter;