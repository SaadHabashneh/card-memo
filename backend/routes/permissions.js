const express = require("express");

const permissionsRouter = express.Router();

const {addPermission, addRolePermission} = require("../controllers/permissions");

permissionsRouter.post("", addPermission);
permissionsRouter.post("/role", addRolePermission);

module.exports = permissionsRouter;