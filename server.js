var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var util = require('util'),
    exec = require('child_process').exec,
    child;
    

var server = BinaryServer({port: 9000});
console.log('server started');
server.on('connection', function(client){
  console.log('connection made');
  client.on('stream', function(s) {
    var stream = client.createStream();
    
    child = exec('./camera.sh',
        function (error, stdout, stderr) {
	    if (error !== null) {
                console.log('exec error: ' + error);
            }
	});

    var file = fs.createReadStream(__dirname + '/live-webcam.jpg');
    file.pipe(stream);
  });
});

