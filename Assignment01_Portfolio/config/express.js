// express application object
// imports of modules
const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const compress = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");

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

  // session secret middleware
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  // configure views
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require("../app/routes/index.server.routes.js")(app);

  app.use(express.static("./public"));
  return app;
};
