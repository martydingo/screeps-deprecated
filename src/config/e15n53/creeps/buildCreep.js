const config_e15n53_sources = require('config_e15n53_sources')

var config_e15n53_creeps_buildCreep = {
    creepStorage: Game.rooms['E15N53'].storage,
    creepSource: config_e15n53_sources.srcOne,
    creepContainerLimit: null,
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
        MOVE,
        MOVE,
        MOVE,
        MOVE,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
    ],
}

module.exports = config_e15n53_creeps_buildCreep
