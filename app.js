"use strict";
const express = require("express");
const cors = require("cors");
const io = require("./socket");
require("dotenv").config();

const app = express();

app.get("/", (req, res, next) => {
  res.json({ status: "ok" });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

io.init(server);
