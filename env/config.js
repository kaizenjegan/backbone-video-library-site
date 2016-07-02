var twitterStrategy = {
	consumerKey: process.env.TwitterConsumerKey,
	consumerSecret: process.env.TwitterConsumerSecret,
	callback: process.env.TwitterCallback
};

var googleStrategy = {
	clientID: process.env.GoogleConsumerKey,
	clientSecret: process.env.GoogleConsumerSecret,
	callbackURL: process.env.GoogleCallback
};
  
 var facebookStrategy = {

 };

var config = {
	twitter: twitterStrategy,
	google: googleStrategy,
	mongooseURL: process.env.MongooseURL,
	isAuthenticated: function(req, res, next)
	{
		 if (req.isAuthenticated()) { 
		 	return next(); 
		 }
		console.log('is not isAuthenticated');
		res.status(401).send({'statusCode': '-1'})
	}
};
module.exports = config;