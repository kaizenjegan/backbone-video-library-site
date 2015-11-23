var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var userSchema = require('../model/user');
var User = mongoose.model('User', userSchema);
/* GET users listing. */
router.get('/me', env.isAuthenticated, function(req, res, next) {
	User.find({_id: req.user._id}, function(err, u){
		res.status(200).send(u[0]);
	}).lean();
});

router.get('/logout', env.isAuthenticated, function(req, res, next){
	req.logout();
	res.send('logged out');
})

module.exports = router;
