# Binary.js Web Camera 
This is a simple webcam image streaming applet.  
It uses binary.js websockets to stream images from a server to a client, sending a webcam image every 0.5 seconds (configurable).
It runs on a basic node express server, so all that's required to run is fswebcam, node and the 2 node modules listed below.

## Dependencies
- [node.js](https://nodejs.org/en/download/package-manager/)
  - binary.js `npm install binaryjs`
  - express.js `npm install express --save`  
- [fswebcam](http://manpages.ubuntu.com/manpages/lucid/man1/fswebcam.1.html)
  - `sudo apt-get install fswebcam`
  - all scripts assume the webcam is located at /dev/video0 (fswebcam default)

## To Run
- run `node server.js` to view output, or if you prefer to run the server as a background job you can run `nohup node server.js > /dev/null 2>&1 &`
- visit \<server-ip\>:3000 to see your webcam's 'video' feed

## To Do
- implement motion detection by comparing previous two captures, only archive when motion is detected.
- add face or human detection? (likely overkill, motion is enough)
- daemonize
