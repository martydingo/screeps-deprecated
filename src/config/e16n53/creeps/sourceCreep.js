const config_e16n53_sources = require('config_e16n53_sources')

var config_e16n53_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N53'].storage,
        creepSource: config_e16n53_sources.srcOne,
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
        ],
    },
    srcTwo: {
        creepStorage: Game.rooms['E17N53'].storage,
        creepSource: config_e16n53_sources.srcTwo,
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
        ],
    },
}

module.exports = config_e16n53_creeps_sourceCreep
