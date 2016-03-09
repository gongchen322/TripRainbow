var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
//var db = require('./db.js');
var bcrypt = require('bcrypt');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


app.use(bodyParser.json());
app.use('/js',express.static(path.join(__dirname, '/js')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, function () {
		console.log('Express listening on port '+ PORT + '!');
	});
/*
db.sequelize.sync().then(function () {
		app.listen(PORT, function () {
		console.log('Express listening on port '+ PORT + '!');
	});
});*/
