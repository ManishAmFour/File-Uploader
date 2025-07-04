const homeG = async (req, res) => {
  res.render("dashboard", { user: req.user || undefined });
};

module.exports = homeG;
