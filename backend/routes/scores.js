const express = require("express");

const { addScore } = require("../controllers/scores");

const scoresRouter = express.Router();

scoresRouter.post("", addScore);

module.exports = scoresRouter;