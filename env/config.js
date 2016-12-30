var twitterStrategy = {
	consumerKey: process.env.TwitterKey,
	consumerSecret: process.env.TwitterSecret,
	callback: process.env.TwitterCallback
}


var config = {
	twitter: twitterStrategy,
	mongooseURL: process.env.MongooseURL,
	isAuthenticated: function(req, res, next)
	{
		 if (req.isAuthenticated()) {
		 	return next();
		 }
		console.log('is not isAuthenticated');
		res.status(401).send({'statusCode': '-1'})
	}
}
module.exports = config;