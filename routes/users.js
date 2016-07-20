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

	res.redirect('/');
});

router.get('/', env.isAuthorized, function(req, res, next) {
	User.find({}, function(err, u){
		res.status(200).send(u);
	}).lean();	
});

router.post('/signup', function(req, res, next){
	var displayName = req.body.displayName;
	var username = req.body.username;
	var password = req.body.password;

	var user = new User({
		username: username,
		password:password,
		displayName: displayName
	});

	user.save(function(err, u)
	{
		if(u)
		{
			res.send(u);
		}

		if(err){
			res.send(err);
		}
	});

});

router.put("/:id", env.isAuthorized, function(req, res, next){

	User.findOne({_id: req.body._id}, function(err, u){
		if(!err){
			u.isApproved = req.body.isApproved;

			u.save(function(u){
				res.status(200).send(u);
			});
		}
	});

});



router.post('/login',  passport.authenticate('local'), function(req, res){
	res.status(200).send(req.user);
});


module.exports = router;
