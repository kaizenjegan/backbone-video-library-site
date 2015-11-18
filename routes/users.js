var express = require('express');
var router = express.Router();
var env = require('../env/config');
/* GET users listing. */
router.get('/',function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', env.isAuthenticated, function(req, res, next){
	req.logout();
	res.send('logged out');
})

module.exports = router;
