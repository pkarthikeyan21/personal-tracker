const User = require('../models/User/User')
const {ReE,ReS,to,isNull,containsSpecialChars,validateEmail} = require('../services/util.services');
const HttpStatus = require('http-status');
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");


// Gmail Auth Save
module.exports.googleAuth =async function(req,res){
    let err,user;
    const {email, name } = req.body;
    if(!email) return ReE(res,'Invalid Email',HttpStatus.BAD_REQUEST);
    if(!name) return ReE(res,'Invalid Name',HttpStatus.BAD_REQUEST);
    [err,user] =await to(User.findOne({email: email}));
    if(err) return ReE(res,err,HttpStatus.BAD_REQUEST)
    if(user){ return ReE(res,{...user.toWeb(),tokens:user.getJWT()},HttpStatus.CONFLICT)}
    else{
    [err,user] = await to(User.create(req.body))
    if(err) return ReE(res,err,HttpStatus.BAD_REQUEST)
    if(user){ return ReE(res,{...user.toWeb(),tokens:user.getJWT()},HttpStatus.OK)} 
    };

}