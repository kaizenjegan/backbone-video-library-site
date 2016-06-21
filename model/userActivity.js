var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'user'},
	description: String,
	activityDate: {type: Date, default: Date.now}
});

module.exports = activitySchema;