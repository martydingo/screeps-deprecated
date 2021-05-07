const config_e17n52_sources = require('config_e17n52_sources')

var config_e17n52_creeps_sourceCreep = {
    srcOne: {
        creepStorage:
            Game.getObjectById('60958d37d48767d66125959f') ||
            Game.rooms['E17N53'].storage.id,
        creepSource: config_e17n52_sources.srcOne,
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

module.exports = config_e17n52_creeps_sourceCreep
