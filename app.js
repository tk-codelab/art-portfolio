/* 
express - for creating the web application
ejs - view templates
node-sass - to compile scss into css
*/

// we require the express library from node.modules:
const express = require('express');
// calling the returned object to create an Express application. We can then access the properties and functions of the application object:
const app = express();
app.use(express.static('public'));

// We require the file system library that's part of node:
const fs = require('fs');
var ejs = require('ejs');
var path = require('path');

// Set views directory
// app.set('views', __dirname + '/views'); // we are setting the string views as this specific path
// view engine setup: EJS / Embedded JavaScript templates
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Run the server in a bash command prompt by calling: node app.js
// Defined a (callback) route handler function for HTTP GET requests to the site root ('/'):
app.get('/', function (req, res) {
    res.render('index')
});

app.get('/contact/', function (req, res) {
    res.render('contact')
});

app.get('/about/', function (req, res) {
    res.render('about')
});

app.get('/portrait-alla-rembrandt/', function (req, res) {
    res.render('portrait-alla-rembrandt')
});


app.get('/all-sections/', function (req, res) {
    res.render('all-sections')
});

// app.listen(3231, function() {
//     console.log('art portfolio app listening on port 3231!');
// });

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3231;
    console.log('art portfolio app listening on port 3231!');
}
app.listen(port);
