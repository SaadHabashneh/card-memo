const express = require("express");
const {register, getUsers, deleteUserById, viewDeletedUsers, reinstateUserById, login} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.post("/login", login);
usersRouter.get("", getUsers);
usersRouter.put("/:id", deleteUserById);
usersRouter.get("/deleted", viewDeletedUsers);
usersRouter.put("/deleted/:id", reinstateUserById);

module.exports = usersRouter;