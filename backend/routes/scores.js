const express = require("express");

const { addScore, getAllScores, getUserScores, deleteScoreById } = require("../controllers/scores");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const scoresRouter = express.Router();

scoresRouter.post("", authentication, authorization("ADD_MYSCORE"), addScore);
scoresRouter.get("", getAllScores);
scoresRouter.get("/:id", authentication, authorization("GET_MYSCORES"), getUserScores);
scoresRouter.delete("/:id", authentication, authorization("DELETE_MYSCORE"), deleteScoreById);

module.exports = scoresRouter;