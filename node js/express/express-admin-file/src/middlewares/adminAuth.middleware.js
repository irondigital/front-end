module.exports = (req, res, next) => {
  if (req.session.userId && req.session.isAdmin) {
    return next();
  }
  res.redirect("/admin/login");
};
