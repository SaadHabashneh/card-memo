const express = require("express");
const {register, getUsers, deleteUserById} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.get("", getUsers);
usersRouter.put("/delete/:id", deleteUserById);

module.exports = usersRouter;