'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
 res.send('Hello world\n');
});
/*
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
*/


/*'use strict';

const express = require('express');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.set("origins", "*:*");

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');



	// Retrieve
	var MongoClient = require('mongodb').MongoClient;

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
	  if(!err) {
	    console.log("We are connected");
	  }
	});


});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

var currentPrice = 99;
 
io.on('connection', function (socket) {
	socket.emit('priceUpdate',currentPrice);
	socket.on('bid', function (data) {
		currentPrice = parseInt(data);
		socket.emit('priceUpdate',currentPrice);
		socket.broadcast.emit('priceUpdate',currentPrice);
	});
});*/