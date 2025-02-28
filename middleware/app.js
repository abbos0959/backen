const express = require("express");
const app = express();
require("dotenv").config({});
const morgan = require("morgan");

app.use(morgan("dev"));
module.exports = app;
