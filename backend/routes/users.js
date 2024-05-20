const express = require("express");

const {register, getUsers, deleteUserById, viewDeletedUsers, reinstateUserById, login} = require("../controllers/users");
const authentication = require("../middlewares/authentication");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.post("/login", login);
usersRouter.get("", authentication, getUsers);
usersRouter.put("/:id", authentication, deleteUserById);
usersRouter.get("/deleted", authentication, viewDeletedUsers);
usersRouter.put("/deleted/:id", authentication, reinstateUserById);

module.exports = usersRouter;