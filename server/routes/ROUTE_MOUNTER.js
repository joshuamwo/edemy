const router = require("./auth");
const express = require("express");

module.exports = app = express();
app.use("/api", router);
