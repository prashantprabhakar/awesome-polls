//importing the liberaries that we are going to use
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.send('You are on home page');
});


router.get('/login', function(req, res, next){
	res.send('You are on login page');
});

router.get('/logout', function(req, res, next){
	res.send('You are on logout page');
});


router.get('/polls', function(req, res, next){
	res.send('You are on polls page');
});

router.get('/user', function(res, res, next){
	res.send('You atre on user page');
});

// Finally, we export this module so that we can import it in our app.js file and gain access to the routes we defined.
module.exports = router;