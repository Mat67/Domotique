'use strict'

exports.fabriqueUrls = function (volet, action) {
  var urls = []
  var serveur = 'http://192.168.1.200:8123/'
  var urlBase = 'api/services/cover/{action}'

  switch (volet) {
    case 'salon' :
      // Volet Milieu
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_salon_milieu' }
      })

      // Volet Gauche
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_salon_gauche' }
      })
      break
    case 'cuisine' :
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_cuisine' }
      })
      break
    case 'bureau' :
    case 'vide' :
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_bureau' }
      })
      break
    case 'notre' :
    case 'parentale' :
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_chambre_parentale' }
      })
      break
    case 'Arthur' :
    case 'arthur' :
      urls.push({
        url: serveur + urlBase.replace('{action}', action),
        data: { 'entity_id': 'cover.volet_chambre_arthur' }
      })
      break
  }

  return urls
}
