const config_e16n53_creeps_upgradeCreep = require('config_e16n53_creeps_upgradeCreep')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e16n53_upgradeCreeps_srcOne = {
    run: function () {
        const roomName = 'E16N53'
        const config = config_e16n53_creeps_upgradeCreep

        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E16N53'
        )
        var upgradeCreep = new classes_creeps_upgradeCreep(
            config.creepStorage,
            config.creepSource,
            config.creepController,
            roomName,
            config.creepUpgradeFromPOS,
            config.creepContainer,
            config.creepBoostRequired,
            config.creepParts
        )

        for (var creep in upgradeCreeps) {
            upgradeCreep.run(upgradeCreeps[creep])
        }
    },
}

module.exports = routines_e16n53_upgradeCreeps_srcOne
