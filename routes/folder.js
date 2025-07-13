const express = require("express");
const folder = express();
const fs = require("node:fs");

folder.get("/folder", (req, res) => {
  res.render("folderC");
});

folder.post("/folder", (req, res) => {});

module.exports = folder;
