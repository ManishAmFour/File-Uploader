const express = require("express");
const getForm = express.Router();
const homeG = require("../controller/homeG");

getForm.get("/", homeG);

module.exports = getForm;
