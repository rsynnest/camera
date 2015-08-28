#!/bin/bash
# Run this script with 
# nohup ./camera.sh 0<&- &>/dev/null &

/usr/local/bin/node /var/www/camera/server.js &

while true; do  
  for i in `seq 1 30`
  do  
    # live stream a single file (overwrite every 3 seconds)
    fswebcam -d /dev/video0 -r 320x240 live-webcam.jpg
    sleep 0.1
  done
  # keep a backlog of images every 3 seconds
  fswebcam -d /dev/video0 -r 320x240 webcam-%s.jpg
done

