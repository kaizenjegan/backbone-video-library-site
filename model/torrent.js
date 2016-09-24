var mongoose = require('mongoose');

var torrentSchema = mongoose.Schema({
  magnetUri: String,
	infoHash: String,
	_fileinfo: { type: mongoose.Schema.ObjectId, ref: 'fileinfo'},
	name: String,
	status: {type: String, default: 'stopped'},
	added_on: {type: Date, default: Date.now},
	completed_on: {type: Date},
  action: {type: String, default: 'start'}
});

module.exports = mongoose.model('Torrent', torrentSchema);