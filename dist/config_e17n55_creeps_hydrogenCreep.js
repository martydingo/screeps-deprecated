const config_e17n55_sources = require('config_e17n55_sources')

var config_e17n55_creeps_hydrogenCreep = {
    creepStorage: Game.rooms['E17N55'].terminal,
    creepHydrogen: config_e17n55_sources.hydrogen,
    creepParts: [
        WORK,
        WORK,
        WORK,
        WORK,
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
        MOVE,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
    ],
}

module.exports = config_e17n55_creeps_hydrogenCreep
