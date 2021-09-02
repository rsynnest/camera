# Binary.js Web Camera 
This is a simple webcam image streaming applet written as a way to learn about web sockets. It uses the `binary.js` node module to stream images from a webcam server to a web client. It runs on a basic node express server and uses fswebcam to interface with the camera. 

## Dependencies
- [node.js](https://nodejs.org/en/download/package-manager/) (includes npm)
  - binary.js `npm install binaryjs`
  - express.js `npm install express --save`  
- [fswebcam](http://manpages.ubuntu.com/manpages/lucid/man1/fswebcam.1.html)
  - `sudo apt-get install fswebcam`
  - all scripts assume the webcam is located at `/dev/video0` (the default location for fswebcam)

## To Run
- run `node server.js` to view output, or if you prefer to run the server as a background job you can run `nohup node server.js > /dev/null 2>&1 &`
- visit \<server-ip\>:3000 to see your webcam's 'video' feed
