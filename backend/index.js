const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`server is listening at localhost://${PORT}`);
});
