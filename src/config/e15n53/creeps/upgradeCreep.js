const config_e15n53_sources = require('config_e15n53_sources')

var config_e15n53_creeps_upgradeCreep = {
    creepStorage: Game.rooms['E15N53'].storage.id,
    creepSource: config_e15n53_sources.srcOne,
    creepController: Game.rooms['E15N53'].controller.id,
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

module.exports = config_e15n53_creeps_upgradeCreep
