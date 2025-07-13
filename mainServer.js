const express = require("express");
const expressSession = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("./generated/prisma");
const mainServer = express();
const getForm = require("./routes/getForm");
const submitForm = require("./routes/submitForm");
const registerForm = require("./routes/registerForm");
const prisma = new PrismaClient();
const passport = require("passport");
const folder = require("./routes/folder");

require("./passport/config");

mainServer.set("view engine", "ejs");
mainServer.use(express.urlencoded({ extended: true }));

mainServer.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: "a secret key",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

mainServer.use(passport.initialize());
mainServer.use(passport.session());

mainServer.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/log-in",
    failureRedirect: "/",
  })
);

mainServer.use(submitForm);
mainServer.use(getForm);
mainServer.use(registerForm);
mainServer.use(folder);

mainServer.get("/log-out", (req, res) => {
  req.logOut(() => {
    res.redirect("/");
  });
});

mainServer.listen(3000);
