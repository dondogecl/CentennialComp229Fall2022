// express application object
// imports of modules
const express = require("express");
const morgan = require("morgan");
const compress = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

module.exports = function () {
  let app = express();
  // identify development environment
  if (process.env.NODE_ENV === "development") {
    // enables logs
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }
  // parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());

  require("../app/routes/index.server.routes.js")(app);
  return app;
};
