# Binary.js Web Camera 
This is a simple security camera app
Uses fswebcam to snap a picture every 0.5 seconds
Uses binary.js and a small node web server to send binary image data every 0.5 seconds

## Dependencies
-node.js
-binary.js
-fswebcam

## To Run
run `nohup ./camera.sh 0<&- &>/dev/null &` (makes webcam take pic every 0.5 and saves it to webcam.jpg)
run `node server.js` to host the binary.js page
visit server/camera/index.html to see 'video' feed


