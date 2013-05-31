var express = require('express'),
    fs = require('fs'),
    app = express(),
    http = require('http'),
    server = http.createServer(app);

server.listen(8888);

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', function(err, text) {
        res.send(text);
    });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.on('user_conected', function(username) {
		socket.username = username;
    });
});
