const express = require("express");

const {register, getUsers, deleteUserById, viewDeletedUsers, reinstateUserById, login} = require("../controllers/users");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const usersRouter = express.Router();

usersRouter.post("", register);
usersRouter.post("/login", login);
usersRouter.get("", authentication, authorization("VIEW_USERS"), getUsers);
usersRouter.put("/:id", authentication, authorization("DELETE_USER"),deleteUserById);
usersRouter.get("/deleted", authentication, authorization("VIEW_DELETED"), viewDeletedUsers);
usersRouter.put("/deleted/:id", authentication, authorization("UNDELETE_USER"), reinstateUserById);

module.exports = usersRouter;