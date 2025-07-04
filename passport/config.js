const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "EmailName", passwordField: "pword" },
    (EmailName, pword) => {
      console.log(EmailName);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.EmailName);
});
passport.deserializeUser((user, done) => {
  done(null, user.EmailName);
});
