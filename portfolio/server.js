/**
 * @author: I. Alejandro Acevedo
 * @studentID: 301222234
 * @course: COMP229-F2022
 * @description: A portfolio website project
 * @filename: server.js
 * @utility: starting point for the server
 */

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// require routers
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');
const contactRouter = require('./routes/contact');


// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** 
 * @routes
*/

// Home page
app.get('/', indexRouter);
// route contact
app.get('/contact', contactRouter);
// services
app.get('/services', servicesRouter);


// static files
app.use('/public', express.static('public'));


/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.listen(port);
app.on('error', onError);
app.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

  /**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = app.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  