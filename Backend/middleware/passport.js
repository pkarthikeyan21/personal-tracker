const User = require("../models/User/User");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const CONFIG = require('../config/config');
const {to} = require('../services/util.services');



module.exports = function(passport) {
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = CONFIG.jwt_encryption || 'secret';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    let err, user;
    console.log(jwt_payload);
    [err,user] = await to(User.findById(jwt_payload.user_id));
    if(err) return done(err, false);
    if(user) return done(null, user);
    return done(null, false);
}));
}