const express = require("express");
const formSubmit = express.Router();

formSubmit.get("/", (req, res) => {
  console.log("form appeared");
});

module.exports = formSubmit;
