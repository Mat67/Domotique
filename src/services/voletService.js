'use strict'
var _ = require('underscore')
var requestify = require('requestify')
var Promise = require('promise')

var serveur = 'http://192.168.1.200:8123/'
var urlBase = 'api/services/cover/{action}'

exports.ouvre = function ouvre (volet) {
  return executeAction('open_cover', volet)
}

exports.ferme = function ferme (volet) {
  return executeAction('close_cover', volet)
}

exports.stop = function stop (volet) {
  return executeAction('stop_cover', volet)
}

var executeAction = function executeAction (action, volet) {
  console.log(action + 'Volet : ' + volet)
  var url = serveur + urlBase.replace('{action}', action)

  var promise = new Promise(function (resolve, reject) {
    switch (volet) {
      case 'salon' :
            // Volet gauche
        requestify.post(url, { 'entity_id': 'cover.volet_salon_gauche' }).then(function (response) {
              // On attend 1 sec avant le suite
          setTimeout(function () { console.log('Sleep 1 sec') }, 1000)

              // Ferme le volet du milieu
          requestify.post(url, { 'entity_id': 'cover.volet_salon_milieu' }).then(function (response) {
            resolve()
          }, function (failed) { reject(failed) })
        }, function (failed) { reject(failed) })

        break
      case 'cuisine' :
        requestify.post(url, { 'entity_id': 'cover.volet_cuisine' }).then(function (response) {
          resolve()
        }, function (failed) { reject(failed) })
        break
      case 'bureau' :
      case 'vide' :
        requestify.post(url, { 'entity_id': 'cover.volet_bureau' }).then(function (response) {
          resolve()
        }, function (failed) { reject(failed) })
        break
      case 'notre' :
      case 'parentale' :
        requestify.post(url, { 'entity_id': 'cover.volet_chambre_parentale' }).then(function (response) {
          resolve()
        }, function (failed) { reject(failed) })
        break
      case 'Arthur' :
      case 'arthur' :
        requestify.post(url, { 'entity_id': 'cover.volet_chambre_arthur' }).then(function (response) {
          resolve()
        }, function (failed) { reject(failed) })
        break
    }
  })

  return promise
}

