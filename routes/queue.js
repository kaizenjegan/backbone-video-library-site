var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var queueSchema = require('../model/queue');
var Download = require('../model/torrent');
var redis = require('redis');
var client = redis.createClient();

router.get('/', env.isAuthorized,  function(req, res, next){
	Download.find({}, function(err, q){
		if(!err){
			console.log("getting torrent " + q.name);

			// client.get(q._id, function(err, data){
			// 	client.get(q.infoHash, function(err, d){
			// 		res.status(200).send(d);
			// 	});
			// });

			res.status(200).send(q);
		}
	});
});

router.post('/', env.isAuthorized, function(req, res, next){
	var queue = new Download({
		magnetUri: req.body.magnetUri,
		name: req.body.name
	});

	queue.save(function(err){
		if(!err){
			res.status(200).send(queue);
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

router.delete('/:id', env.isAuthorized, function(req, res, next){
	console.log(req.body);
	console.log(req.params._id)
	Download.remove({_id: req.params.id}, function(err, d){
		if(!err){
			res.send(d);
		}
	});
});

module.exports = router;