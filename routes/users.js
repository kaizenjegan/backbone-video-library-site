var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var userSchema = require('../model/user');
var User = mongoose.model('User', userSchema);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        return done(null, user);
      });
    }
));

/* GET users listing. */
router.get('/me', env.isAuthenticated, function(req, res, next) {
	User.find({_id: req.user._id}, function(err, u){
		res.status(200).send(u[0]);
	}).lean();
});

router.get('/logout', env.isAuthenticated, function(req, res, next){
	req.logout();
	res.send('logged out');
});



router.post('/signup', function(req, res, next){
	//res.send('signup');
	var displayname = req.body.displayname;
	var username = req.body.username;
	var password = req.body.password;


	var user = new User({
		username: username,
		password:password,
		displayName: displayname
	});

	user.save(function(err, u)
	{
		if(u)
		{
			res.send(u);
		}
	});

});

router.post('/login',  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));


module.exports = router;
