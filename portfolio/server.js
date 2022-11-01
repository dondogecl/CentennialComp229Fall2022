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
const mongoose = require('mongoose');
const logger = require('morgan');
//const indexRouter = require('routes/index');
const cookieParser = require('cookie-parser');


// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

/** 
 * @routes
*/

// Home page
app.get('/', (req, res) => {
    console.log('/');
    res.render('index',{title: 'Home'});
});

// about me page
// app.get('/about', (req, res) => {
//     res.render('about', { title: 'About Me' });
// });

// projects page
// app.get('/projects', (req, res) => {
//     res.render('projects', { title: 'Projects' });
// });

// route contact
app.get('/contact', (req, res) => {
    console.log('/contact');
    res.render("contact.ejs", { title: 'Contact Me' });
    
});

app.use('/public', express.static('public'));


// server listener on port 3000
app.listen(3000);