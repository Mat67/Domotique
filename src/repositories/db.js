'use strict'
var MongoClient = require('mongodb').MongoClient

var localDB = null
exports.getDB = function getDB () {
  var url = 'mongodb://mat:attaque@domotique-shard-00-00-bijws.mongodb.net:27017,domotique-shard-00-01-bijws.mongodb.net:27017,domotique-shard-00-02-bijws.mongodb.net:27017/Domotique?ssl=true&replicaSet=Domotique-shard-0&authSource=admin'
  // Use connect method to connect to the server 
  if (localDB)
    return Promise.resolve(localDB)

  return MongoClient.connect(url).then(function (db) {
      console.log("connected")
    localDB=db
    return Promise.resolve(db)
  })
}
