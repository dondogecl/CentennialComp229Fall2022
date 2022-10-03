exports.render = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  // record the time of the last user request
  req.session.lastVisit = new Date();
  res.render("index", {
    title: "Home Page",
  });
};
