// Start Express web server
var express = require('express');
var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var webserver = app.listen(3000, function () {
    var host = webserver.address().address;
    var port = webserver.address().port;
    console.log('express web server started');
});

// Start Binary Web Socket server
var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var util = require('util'),
    exec = require('child_process').exec,
    child;
    

var server = BinaryServer({port: 9000});
console.log('binary socket server started');
server.on('connection', function(client){
  console.log('connection made');
  // When client pings, take another picture and send it to the client
  client.on('stream', function(s) {
    var stream = client.createStream();
    // Call camera script to snap a live image and an archive image
    child = exec('./camera.sh',
        function (error, stdout, stderr) {
	    if (error !== null) {
                console.log('exec error: ' + error);
            }
	});
    var file = fs.createReadStream(__dirname + '/live-webcam.jpg');
    // Pipe image file to client
    file.pipe(stream);
  });
});

