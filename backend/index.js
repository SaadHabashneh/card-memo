const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

// routers:- 
const rolesRouter = require("./routes/roles");
app.use("/roles", rolesRouter);

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
    console.log(`server is listening at localhost://${PORT}`);
});
