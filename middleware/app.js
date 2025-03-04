const express = require("express");
const app = express();
require("dotenv").config({});
const morgan = require("morgan");
const adminRoute = require("../router/staff/admin");
const ErrorGlobalHandler = require("../config/errorController");
require("../config/db")();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/admins", adminRoute);

app.all("*", ErrorGlobalHandler.NotFoundError);

app.use(ErrorGlobalHandler.ErrorGlobalHandler);
module.exports = app;
