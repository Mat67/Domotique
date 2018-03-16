'use strict'
var _ = require('underscore')
var meteoRepository = require('repositories/MeteoRepository')

exports.enregistreLux = function enregistreLux (lux) {
  console.log('enregistreLux : ' + lux)

  return meteoRepository.add(parseInt(lux))
}

exports.sauvegarde = function sauvegarde (meteo) {
  return meteoRepository.add(meteo)
}
