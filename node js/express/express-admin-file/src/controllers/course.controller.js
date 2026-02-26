let courses = require("../data/courses.data");

exports.list = (req, res) => {
  res.render("admin/courses", { courses });
};

exports.add = (req, res) => {
  const { title, status } = req.body;

  courses.push({
    id: Date.now(),
    title,
    status
  });

  res.redirect("/admin/courses");
};

exports.remove = (req, res) => {
  courses = courses.filter(course => course.id != req.params.id);
  res.redirect("/admin/courses");
};
