const express = require("express");
const {register, getUsers, deleteUserById, viewDeletedUsers} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.get("", getUsers);
usersRouter.put("/:id", deleteUserById);
usersRouter.get("/deleted", viewDeletedUsers);

module.exports = usersRouter;