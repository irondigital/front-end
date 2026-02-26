const users = require("../data/users.data");

exports.loginPage = (req, res) => {
  res.render("admin/login", { error: null });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find user in hardcoded list
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.render("admin/login", { error: "User not found" });
  }

  if (user.password !== password) {
    return res.render("admin/login", { error: "Wrong password" });
  }

  // Save user session
  req.session.userId = user.id;
  req.session.isAdmin = user.isAdmin;

  res.redirect("/admin/dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};
