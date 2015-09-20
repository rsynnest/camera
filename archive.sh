#!/bin/bash
# This script is called from server.js to archive video feed by saving a picture every 3 seconds

# keep a backlog of images every 3 seconds
while true; do
  fswebcam -d /dev/video0 -r 320x240 ./archive/webcam-%s.jpg
  sleep 3
done

