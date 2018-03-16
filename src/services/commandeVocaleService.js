'use strict'
var _ = require('underscore')
var requestify = require('requestify')
var fabriqueUrls = require('factory/fabriqueUrls')
var voletService = require('services/voletService')

exports.executeCommandeVocale = function executeCommandeVocale (commande) {
  console.log('executeCommandeVocale : ' + commande)
  var actions = []

  // Param match
  var result = commande.match(/(ouvre|ferme|baisse|Arthur|notre|vide|bureau|arthur|salon|cuisine)/g)

  // Mode par défaut
  var mode = 'ouvre'

  _.each(result, function (r) {
    console.log(r)

    if (_.indexOf(['ouvre', 'ferme', 'baisse'], r) >= 0) {
      mode = r
    } else if (mode === 'ouvre') {
      actions.push({volet: r, action: 'open_cover'})
    } else if (mode === 'ferme') {
      actions.push({volet: r, action: 'close_cover'})
    } else if (mode === 'baisse') {
      actions.push({volet: r, action: 'stop_cover'})
    }
  })

  // Parcours de toutes les actions
  _.each(actions, function (o) {
    switch (o.action) {
      case 'open_cover':
        voletService.ouvre(o.volet)
        break
      case 'close_cover':
        voletService.ferme(o.volet)
        break
      case 'stop_cover':
        voletService.stop(o.volet)
        break
      default:
        break
    }

    // On attend 1 sec avant chaques actions
    setTimeout(function () { console.log('Sleep 1 sec') }, 1000)
  })
}
