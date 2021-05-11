const config_e17n53_sources = require('config_e17n53_sources')

var config_e17n53_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N53'].storage,
        creepSource: config_e17n53_sources.srcOne,
        creepParts: [
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            MOVE,
            MOVE,
            MOVE,
            CARRY,
        ]
    },
}

module.exports = config_e17n53_creeps_sourceCreep
