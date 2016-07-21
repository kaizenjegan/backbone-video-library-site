var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var downloadSchema = require('../model/download');
var Download = mongoose.model('Download', downloadSchema);

router.get('/', env.isAuthorized, function(req, res, next){
	Download.find({}, function(err, d){
		if(!err){
			res.status(200).send(d);
		}
	});
});

router.post('/', env.isAuthorized, function(req, res, next){

	var download = new Download({
		magnetUri: req.body.magnetUri,
		name: req.body.name
	});

	download.save(function(err){
		if(!err){
			res.status(200).send(download);
		}
	});
});

router.put('/', env.isAuthorized, function(req, res, next){	
	
	Download.update({_id: req.body._id}, {status: req.body.status}, function(err, d){
		if(!err){
			res.send(d);
		}
	});
});

module.exports = router;