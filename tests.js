require('app-module-path').addPath(__dirname + '/src')

var chai = require('chai')
var assert = chai.assert // we are using the "expect" style of Chai
var generator = require('Services/Generator')

describe('Generator', function () {
  it('Echauffement est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.echauffement.duree)
  })

  it('Skill est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.skill.duree)
  })

  it('Metcon est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.metcon.duree)
  })

  it('un exercice pour le skill est généré', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.skill.exercices)
    assert.isAtLeast(resultat.skill.exercices.length, 1)
  })

  it('un exercice pour le metcon est généré', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.metcon.exercices)
    assert.isAtLeast(resultat.metcon.exercices.length, 1)
  })

  it('un exercice pour l echauffement est généré', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.echauffement.exercices)
    assert.isAtLeast(resultat.echauffement.exercices.length, 1)
  })
})
