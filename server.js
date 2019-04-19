var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//app.use(express.static(__dirname + '/node_modules'));
app.use('/public', express.static('public'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200);
module.exports = app;