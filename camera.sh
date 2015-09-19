#!/bin/bash
# This script is called from server.js to snap a picture every time the client pings  socket (every 0.5 seconds)

# live stream a single file to client (gets overwritten every time client pings socket)
fswebcam -d /dev/video0 -r 320x240 live-webcam.jpg
# keep a backlog of images every 3 seconds
fswebcam -d /dev/video0 -r 320x240 ./archive/webcam-%s.jpg

