require("dotenv").config();

// Initialize Config Object
const CONFIG = {}

CONFIG.PORT = process.env.port || 8080;
CONFIG.jwt_encryption = process.env.JWTTOKEN || 'token'
CONFIG.JWT_EXPIRATION = process.env.JWTEXPIRATION || '865000'
CONFIG.ATLAS_URI = process.env.ATLAS_URI || 'mongodb://localhost:27017/test'

module.exports = CONFIG