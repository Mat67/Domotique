var path = require('path')
require('app-module-path').addPath(path.join(__dirname, '/src/'))

var express = require('express')
var bodyParser = require('body-parser')

var routes = require('routes')

var app = express()
// parse to json
app.use(bodyParser.json())

routes.configure(app)

var port = 8080
console.log('Listening port ' + port)
app.listen(port)
