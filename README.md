# Binary.js Web Camera 
This is a simple webcam image streaming thing.  
It uses binary.js websockets to stream images from server to client, sending a webcam image every 0.1 seconds.
It runs on a basic node express server, so all that's required to run is node and the node modules listed below.

## Dependencies
- node.js
  - binary.js `npm install binaryjs`
  - express.js `npm install express --save`  
- fswebcam  
  - scripts assume webcam is located at /dev/video0

## To Run
- run `node server.js` to view output, or if you prefer to run the server as a background job you can run `nohup node server.js 0<&- &>/dev/null &`
- visit <server-ip>:3000 to see your webcam's 'video' feed

