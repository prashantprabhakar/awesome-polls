var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');


// we are using dotenv leberary to load our env variables from .
dotenv.load();

var routes = require('./routes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret:'cbksdcjsd', resave: false, saveUnintialized: false}));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

// If our application encounters an error, we'll display the error and stacktraceap
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.send(err);
});

// Finalyy we'll choose to have our app listen on port 3000.
app.listen(3000);