// express application object
// imports of modules
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = function() {
    let app = express();
    require('../app/routes/index.server.routes.js')(app);
    return app;
}