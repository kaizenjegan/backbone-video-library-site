var express = require('express');
var router = express.Router();
var env = require('../env/config');
var mongoose = require('mongoose');
var User = require('../model/user');
var user = new User();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    user.getByName(username).then(function (u) {
      return done(null, u);
    }, function (err) {
      return done(null, false, { message: 'Incorrect username.' });
    });
  }
));

/* GET users listing. */
router.get('/me', env.isAuthenticated, function (req, res, next) {
  user.getById(req.user._id).then(function (u) {
    res.status(200).send(u);
  }, function (err) {
    res.status(400).send();
  });
});

router.get('/logout', env.isAuthenticated, function (req, res, next) {
  req.logout();

  res.redirect('/');
});

router.get('/', env.isAuthorized, function (req, res, next) {
  user.get().then(function (u) {
    res.status(200).send(u);
  }, function (err) {
    res.status(400).send();
  });
});

router.post('/signup', function (req, res, next) {
  var displayName = req.body.displayName;
  var username = req.body.username;
  var password = req.body.password;

  user.add({
    username: username,
    password: password,
    displayName: displayName
  }).then(function (u) {
    res.status(200).send(u);
  }, function (err) {
    res.status(400).send();
  });
});

router.put("/:id", env.isAuthorized, function (req, res, next) {
  // User.getById(req.body._id).then(function (user) {
  //   // u.isApproved = req.body.isApproved;
  //   //     u.save(function (u) {
  //   //       res.status(200).send(u);
  //   //     });
  //   res.status(200).send(user);
  // }, function (err) {

  // });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.status(200).send(req.user);
});


module.exports = router;
