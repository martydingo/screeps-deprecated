const config_e16n53_sources = require('config_e16n53_sources')

var config_e16n53_creeps_upgradeCreep = {
    creepStorage: Game.rooms['E17N53'].storage.id,
    creepSource: config_e16n53_sources.srcOne,
    creepController: Game.rooms['E16N53'].controller.id,
    creepUpgradeFromPOS: null,
    creepContainer: null,
    creepParts: [
        MOVE,
        MOVE,
        MOVE,
        MOVE,
        MOVE,
        MOVE,
        WORK,
        WORK,
        WORK,
        WORK,
        WORK,
        WORK,
        WORK,
        WORK,
        CARRY,
        CARRY,
        CARRY,
        CARRY,
    ],
}

module.exports = config_e16n53_creeps_upgradeCreep
