// handle the route for index page
module.exports = function(app) {
    let index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};