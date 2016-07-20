var mongoose = require('mongoose');


var downloadSchema = new mongoose.Schema({
	magnetUri: {type: String, default: ''},
	name: {type: String, default: ''},
	size_in_GB: {type: Number, default: 0},
	status: {type: String, default: ''},
	seeds: {type: Number, default: 0},
	peers: {type: Number, default: 0},
	downloadSpeed: {type: Number, default: 0},
	uploadSpeed: {type: Number, default: 0},
	eta: {type: Date, default: Date.now},
	added_on: {type: Date, default: Date.now},
	completed_on: {type: Date, default: Date.now}
});


module.exports = downloadSchema;