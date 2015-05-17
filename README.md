# Binary.js Web Camera 
This is a simple webcam / security camera thing.  
It uses fswebcam to snap a picture every 0.5 seconds, then uses binary.js websockets and a small node web server to send binary image data to a hosted page every 0.5 seconds.  

## Dependencies
- node.js  
- binary.js  
- fswebcam  

Assumes webcam is located at /dev/video0 with resolution of 320x240  

## To Run
- run `nohup ./camera.sh 0<&- &>/dev/null &` (makes webcam take pic every 0.5 and saves it to webcam.jpg)
- run `node server.js` to host the binary.js page
- visit <example.com>/camera/index.html to see your webcam's 'video' feed


