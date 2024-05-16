const express = require("express");

const permissionsRouter = express.Router();

const {addPermission} = require("../controllers/permissions");

permissionsRouter.post("", addPermission);

module.exports = permissionsRouter;