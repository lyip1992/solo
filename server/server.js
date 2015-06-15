var express = require('express');

var app = express();

require('./config/middleware.js')(app);

module.exports = app;
