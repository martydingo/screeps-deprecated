const config_e15n53_sources = require('config_e15n53_sources')

var config_e15n53_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E15N53'].storage,
        creepSource: config_e15n53_sources.srcOne,
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

module.exports = config_e15n53_creeps_sourceCreep
