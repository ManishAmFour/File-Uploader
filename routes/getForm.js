const express = require("express");
const getForm = express.Router();
const multer = require("multer");
const homeG = require("../controller/homeG");
getForm.get("/", homeG);

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: diskStorage });

getForm.post("/", upload.single("file_uploaded"), (req, res) => {
  console.log(req.file);
  res.redirect("/");
});

module.exports = getForm;
