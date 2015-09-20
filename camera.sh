#!/bin/bash
# This script is called from server.js to snap a picture every time the client pings  socket (every 0.1 seconds)

# Save and overwrite image file (gets called every time client pings socket)
fswebcam -d /dev/video0 -r 320x240 live-webcam.jpg
