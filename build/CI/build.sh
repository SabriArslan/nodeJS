#!/bin/bash

#install packages
npm install

# run server
node program.js &

#run unit tests
mocha tests

# set $mydir = `pwd`
# echo $mydir