const config_e18n55_sources = require('config_e18n55_sources')

var config_e18n55_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N55'].storage,
        creepSource: config_e18n55_sources.srcOne,
        creepParts: [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, CARRY],
    },
}

module.exports = config_e18n55_creeps_sourceCreep
