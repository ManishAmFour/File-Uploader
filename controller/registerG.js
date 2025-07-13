const registerG = (req, res) => {
  if (!req.user) {
    res.render("register", { value: "please fill the necessary input fields" });
  } else {
    res.send(`<p>you're already logged in first log out</p>
      <a href='/'>back to the homepage</a>
      `);
  }
};

module.exports = registerG;
