require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./config/db");
const users = require("./models/userSchema");
const router = require("./routes/router");

const cors = require("cors");

const port = 8080;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`listening at port number http://localhost:${port}`);
});
