var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
	// body...
	res.send({msg: "test"});
});


module.exports = router;