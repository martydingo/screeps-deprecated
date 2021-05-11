const config_e17n55_sources = require('config_e17n55_sources')

var config_e17n55_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N55'].storage,
        creepSource: config_e17n55_sources.srcOne,
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
    srcTwo: {
        creepStorage: Game.rooms['E17N55'].storage,
        creepSource: config_e17n55_sources.srcTwo,
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

module.exports = config_e17n55_creeps_sourceCreep
