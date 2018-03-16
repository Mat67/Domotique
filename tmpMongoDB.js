var path = require('path')
require('app-module-path').addPath(path.join(__dirname, '/src/'))

var express = require('express')
var bodyParser = require('body-parser')
var uvRepository = require('repositories/UVRepository')


uvRepository.update().then(function (r) {
  console.log(r)
})
