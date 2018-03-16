var commandeVocaleService = require('services/commandeVocaleService')
var sensorService = require('services/sensorService')

exports.configure = function configure (app) {
  // Gestion des commandes vocales via google assistant et des règles IFTT
  app.get('/api/v1/domotique/commande_vocale', function (req, res) {
    if (!req.query.commande) {
      return res.sendStatus(400)
    }

    commandeVocaleService.executeCommandeVocale(req.query.commande)

    res.sendStatus(200)
  })

  app.post('/api/v1/domotique/capteurs', function (req, res) {
      var meteo = {
        UV: Number.isNaN(parseInt(req.body.uv)) ? null : parseInt(req.body.uv),
        Lux: Number.isNaN(parseInt(req.body.lux)) ? null : parseInt(req.body.lux),
        Temperature: Number.isNaN(parseFloat(req.body.temperature)) ? null : parseFloat(req.body.temperature),
        Vent: {
          Direction: Number.isNaN(parseInt(req.body.directionVent)) ? null : parseInt(req.body.directionVent),
          Vitesse: Number.isNaN(parseFloat(req.body.vitesseVent)) ? null : parseFloat(req.body.vitesseVent)
        },
        Humidite: Number.isNaN(parseFloat(req.body.humidite)) ? null : parseFloat(req.body.humidite),
        Precipitations: Number.isNaN(parseFloat(req.body.precipitations)) ? null : parseFloat(req.body.precipitations)
      }

    sensorService.sauvegarde(meteo).then(function (succes) {
      res.json(succes)
    }, function (rejected) {
      console.log(rejected)
      res.status(500).send(rejected)
    })
  })

  // /api/v1/domotique/volets
  // Paramètres : 
  // TemperatureActuelle
  // TemperatureMax (optionnel)
  app.get('/api/v1/domotique/volets', function (req, res) {
    if (!req.query.temperatureActuelle) {
      return res.sendStatus(400)
    }

    if (!req.query.Volet) {
      return res.sendStatus(400)
    }

    sensorService.enregistreLux(req.query.uv).then(function (succes) {
      res.json(succes)
    }, function (rejected) {
      console.log(rejected)
      res.status(500).send(rejected)
    })
  })
}
