var mongoose = require('mongoose');


var downloadSchema = new mongoose.Schema({
	magnetUri: String,
	name: String,
	size_in_GB: {type: Number, default: 0},
	status: {type: String, default: 'stopped'},
	seeds: String,
	peers: String,
	downloadSpeed: String,
	uploadSpeed: String,
	eta: Date,
	added_on: {type: Date, default: Date.now},
	completed_on: {type: Date, default: Date.now}
});


module.exports = downloadSchema;