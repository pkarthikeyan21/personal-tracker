const mongoose = require("mongoose");
const CONFIG = require('../../config/config')
const jwt = require('jsonwebtoken');
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongoosePaginate = require('mongoose-paginate-v2');
const userSchema = new mongoose.Schema({
    email : {
        type: 'string',
    },
    image : {
        type: 'string',
        default: 'https://lh6.googleusercontent.com/-zX1wbJHB25Y/AAAAAAAAAAI/AAAAAAAAGCA/HvXmMhodM98/photo.jpg'
    },
    username:{
        type : 'string',
        unique : true,
    },
    name : {
        type :'string'
    },
    phone : {
        type: 'string',
        length:10,
    },
    password : {
        type: 'string',
        default: ''
    }
})

userSchema.pre("save", async function (next) {
    try {
      const encryptpassword = await cryptr.encrypt(this.password);
      this.password = encryptpassword;
      next();
    } catch (error) {
      next(error);
    }
  });

userSchema.methods.getJwt = () =>{
    let expiredTime = parseInt(CONFIG.JWT_EXPIRATION)
    return ("Bearer "+jwt.sign({
        user_id: this._id,
        authId: this.authId
      },
      CONFIG.jwt_secret, {
        expiresIn: expiredTime,
        }));
}

userSchema.methods.toWeb = function () {
    let json = this.toJSON();
    json.id = this._id; 
    return json;
  };

userSchema.plugin(aggregatePaginate);
userSchema.plugin(mongoosePaginate);
const User = mongoose.model('user',userSchema);

module.exports = User;
