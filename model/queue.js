var mongoose = require('mongoose');


var queueSchema = new mongoose.Schema({
	magnetUri: String,
	name: String,
	size_in_GB: {type: Number, default: 0},
	status: {type: String, default: 'stopped'},
	action: {type: String, default: 'resume'},
	seeds: String,
	peers: String,
	queueSpeed: String,
	uploadSpeed: String,
	eta: Date,
	added_on: {type: Date, default: Date.now},
	completed_on: {type: Date, default: Date.now},
	isDownload: {type: Boolean, default: false}
});


module.exports = queueSchema;