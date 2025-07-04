const express = require("express");
const registerG = require("../controller/registerG");
const registerForm = express.Router();
const registerP = require("../controller/registerP");
const { body, validationResult } = require("express-validator");

registerForm.get("/register", registerG);

registerForm.post(
  "/register",

  body("EmailName").isEmail().withMessage("email name is not valid"),

  body("pword")
    .isLength({ min: 5, max: 25 })
    .withMessage("password should be in a given word limit"),
  (req, res, next) => {
    const errorArray = validationResult(req);

    if (!errorArray.isEmpty()) {
      return res.render("register", {
        value: "please write the credentials again",
      });
    }
    next();
  },
  registerP
);

module.exports = registerForm;
