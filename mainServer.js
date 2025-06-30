const express = require("express");
const expressSession = require("express-session");

const mainServer = express();
const formSubmit = require("./routes/formSubmit");

/*
mainServer.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: "little Secret",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);*/

mainServer.use(formSubmit);

mainServer.listen(3000);
