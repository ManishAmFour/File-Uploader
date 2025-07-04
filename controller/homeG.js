const homeG = async (req, res) => {
  if (!req.user) {
    res.render("dashboard");
  } else {
    res.render("dashboard", { user: req.user });
  }
};

module.exports = homeG;
