// express server
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// imports
const express = require('./config/express');

// create express app
const app = express();
app.listen(3000);
module.exports = app;

// display running message to log
console.log('Server running at http://localhost:3000/');