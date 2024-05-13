const express = require("express");

const {createRole} = require("../controllers/roles");

const rolesRouter = express.Router();

rolesRouter.post("", createRole);

module.exports = rolesRouter;