#!/bin/bash
# Run this script with 
# nohup ./camera.sh 0<&- &>/dev/null &

while true; do 
  DATE=$(date +"%Y-%m-%d_%H%M%S")
  fswebcam -d /dev/video0 -r 320x240 webcam.jpg
  #fswebcam -d /dev/video0 -r 320x240 $DATE.jpg
  sleep 0.2
done
