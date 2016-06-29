var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var env = require('../env/config');
var userSchema = require('../model/user');
var User = mongoose.model('User', userSchema);



//Implement passport
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: env.twitter.consumerKey, //env.config.twitter.consumerKey,
    consumerSecret: env.twitter.consumerSecret, //'MGdqxBUI0lLoLc7KZYnW0xRNPAfpUL9diWFLU559lA', //env.config.twitter.consumerKey,
    callbackURL: env.twitter.callback 
  },
   function(token, tokenSecret, profile, done) {    
        console.log('profile');
        console.log('token: ' + token);
        console.log('tokenSecret: ' + tokenSecret);
        console.log('profile: ' + profile);
        console.log('done: ' + done);


        //todo: if twitter profile change, update
        User.findOne({ oauthID: profile.id }, function(err, user) {
            if(err) { console.log(err); }

            if (!err && user != null) {
                done(null, user);
            } 
            else 
            {
                //log where u are authenticating from.
                //e.g authType: twitter
                var user = new User({
                    oauthID: profile.id,
                    username: profile.username,
                    displayName: profile.displayName,
                    created: Date.now()
                });

                user.save(function(err) {
                    if(err) {
                        console.log(err);
                    }else{
                        console.log("saving user ...");
                        done(null, user);
                    }
                });

            }
        });
    }
));
//end implement passport

router.post('/login',
  passport.authenticate('local', { successRedirect: '/index.html',
                                   failureRedirect: '/login' }));


router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', 
  passport.authenticate('twitter', { successRedirect: '/index.html',
                                     failureRedirect: '/fail' }));


module.exports = router;