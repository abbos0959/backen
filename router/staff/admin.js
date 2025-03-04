const express = require("express");

const adminRoute = express.Router();

const adminController = require("../../controller/staff/adminCtrl");

adminRoute.post("/register", adminController.registerAdminCtrl);
adminRoute.post("/login", adminController.loginAdminCtrl);

module.exports = adminRoute;
