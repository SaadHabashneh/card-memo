const express = require("express");
const {register, getUsers} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.get("", getUsers);

module.exports = usersRouter;