'use strict'

exports.convert = function (param) {
    var baseGroupe = 'json.htm?type=command&param=switchscene&idx={idx}&switchcmd={action}'
    var baseVolet = 'json.htm?type=command&param=switchlight&idx={idx}&switchcmd={action}'

    switch (param) {
        case 'salon' :
            return baseGroupe.replace('{idx}', '1')
        case 'cuisine' :
            return baseVolet.replace('{idx}', '49')
        case 'bureau' :
        case 'vide' :
             return baseVolet.replace('{idx}', '47')
        case 'notre' :
        case 'parentale' :
             return baseVolet.replace('{idx}', '48')
        case 'Arthur' :
        case 'arthur' :
             return baseVolet.replace('{idx}', '46')
    }
}
