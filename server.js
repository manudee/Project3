const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
var db = require('./models');

const passport = require('passport');

// const http = require('http');
// var socket = require('socket.io');

// var server = http.createServer(app);
// const io = socket(server);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var request = require('request');

//Socket connection
// io.on('connection', (socket) => {
// 	console.log(socket.id);
// })

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

app.use(passport.initialize());

const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api/createuser/auth', authCheckMiddleware);

const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3"
);

//let's try this again
// connect to the database and load models
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
// server.listen(PORT, function () {
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




