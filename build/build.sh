#!/bin/bash

#install mocha globally
npm install -g mocha

#install packages
npm install

# run server
node program.js &

#run unit tests
mocha tests
