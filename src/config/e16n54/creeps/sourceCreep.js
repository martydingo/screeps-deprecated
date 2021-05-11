const config_e16n54_sources = require('config_e16n54_sources')

var config_e16n54_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N53'].storage,
        creepSource: config_e16n54_sources.srcOne,
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

module.exports = config_e16n54_creeps_sourceCreep
