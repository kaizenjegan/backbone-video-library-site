var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    oauthID: String,
    username: String,
    password: String,
    displayName: String,
    createdBy: Number,
    createdDateTime: { type: Date, default: Date.now },
    role: {type: String, default: 'normal'},
    isApproved: {type: Boolean, default: false}
});


module.exports = usersSchema;