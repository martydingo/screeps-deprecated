const config_e17n54_sources = require('config_e17n54_sources')

var config_e17n54_creeps_sourceCreep = {
    srcOne: {
        creepStorage: Game.rooms['E17N55'].storage,
        creepSource: config_e17n54_sources.srcOne,
        creepParts: [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, CARRY],
    },
}

module.exports = config_e17n54_creeps_sourceCreep
