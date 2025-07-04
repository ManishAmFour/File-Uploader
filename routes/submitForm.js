const express = require("express");
const submitForm = express.Router();

submitForm.get("/log-in", (req, res) => {
  if (!req.user) {
    res.render("login");
  } else {
    res.redirect("/");
  }
});

submitForm.post("/log-in", (req, res) => {
  res.render("login");
});

module.exports = submitForm;
