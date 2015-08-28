var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');

var server = BinaryServer({port: 9000});
console.log('server started');
server.on('connection', function(client){
  console.log('connection made');
  client.on('stream', function(s) {
    var stream = client.createStream();
    var file = fs.createReadStream(__dirname + '/live-webcam.jpg');
    file.pipe(stream);
  });
});

