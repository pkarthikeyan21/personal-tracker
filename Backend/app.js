const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const swaggerUi = require('swagger-ui-express');
const api = require("./routes/api");
const compression = require('compression')
const passport = require("passport");
const morgan = require('morgan')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./config/swagger-config.yaml');


app.use(
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors({ origin: "*", credentials: true }),
  );
app.use(compression());
app.use(morgan("dev"));
// app.use('/api',api);


app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));


// Error Page
app.use((req,res,next)=>{
  var err = new Error('not found');
  err.status = 404;
  next(err);
})
app.use(passport.initialize());
app.use(passport.session());
// set Header
app.use((req,res,next)=>{
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE")
  // Request headers you wish to allow
 res.setHeader( "Access-Control-Allow-Headers","X-Requested-With,content-type");
 // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.status === 404) {
    res.status(404).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;

















// const swaggerJsdoc = require('swagger-jsdoc');


// Swagger JS Alternative Setup
// Swagger Setup
// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Chat API Documentation',
//       version: '1.0.0',
//     },
//   },
//   apis: ['./routes/api.js'],
// };
// const jsdoc = swaggerJsdoc(options); 
// app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(jsdoc));
// Footer