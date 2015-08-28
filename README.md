# Binary.js Web Camera 
This is a simple webcam / security camera thing.  
It uses fswebcam to snap a picture every 0.1 seconds, then uses binary.js websockets and a small node web server to send binary image data to a hosted page every 0.1 seconds.

## Dependencies
- node.js  
- binary.js  
- fswebcam  

Assumes webcam is located at /dev/video0 with resolution of 320x240  

## To Run
- run `nohup ./camera.sh 0<&- &>/dev/null &`
  - this script makes the webcam take a picture every 0.1sec and saves it to live-webcam.jpg
  - it also saves a backlog of images at webcam-%s.jpg every 3 esconds
- visit <server>/camera/index.html to see your webcam's 'video' feed, where <server> is the server running the script


