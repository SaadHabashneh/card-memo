const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

// roles router 
const rolesRouter = require("./routes/roles");
app.use("/roles", rolesRouter);

// users router
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// permissions router
const permissionsRouter = require("./routes/permissions");
app.use("/permissions", permissionsRouter);

app.listen(PORT, () => {
    console.log(`server is listening at localhost://${PORT}`);
});
