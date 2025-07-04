const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { PrismaClient } = require("../generated/prisma");
const bcrypt = require("bcrypt");
passport.use(
  new LocalStrategy(
    { usernameField: "EmailName", passwordField: "pword" },
    async (EmailName, pword, done) => {
      const prisma = new PrismaClient();
      const user = await prisma.user.findUnique({
        where: { email: EmailName },
      });
      if (user !== null) {
        if (bcrypt.compareSync(pword, user.pword)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } else {
        return done(null, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
