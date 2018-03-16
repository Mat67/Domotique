'use strict'
// var _ = require('underscore')
var mongoClient = require('mongodb').MongoClient
var moment = require('moment')
var db = require('repositories/db')

exports.add = function add (meteo) {
  // Connection URL
  // Use connect method to connect to the server
  console.log('add')
  meteo.Date = moment(Date.now()).toDate()

  return db.getDB().then(function (db) {
    // Get the collection
    var col = db.collection('Meteo')
    console.log('get col')

    return col.insertOne(meteo).then(function (r) {
      console.log('insert')
      // Finish up test
      return Promise.resolve(meteo)
      // db.close();
    }, function (f) {
      console.log('error insert : ' + f)
      Promise.reject(f)
    })
  })
}

exports.getLast10Minutes = function getLast10Minutes () {
  return db.getDB().then(function (db) {
    var now = moment(Date.now())
    var nowMoins10Min = moment(now).add(-10, 'minutes').toDate()
    // Get the collection
    var col = db.collection('UVs')

    return col.find({ 'Date': {$gte: nowMoins10Min} }).toArray().then(function (r) {
      console.log(r.length + ' results')
      // Finish up test
      return Promise.resolve(r)
      // db.close();
    }, function (f) {
      console.log('error get last 10 minutes : ' + f)
      Promise.reject(f)
    })
  })
}



exports.update = function update () {
  return db.getDB().then(function (db) {
    // Get the collection
    var col = db.collection('Meteo')
     col.updateMany({},  { $rename: { 'Value' : 'Lux' } }).then(function (r) {
      var t = ""
     }, function (r) {
       var s = ''
     })
  })
}