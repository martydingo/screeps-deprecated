const config_e17n53_creeps_upgradeCreep = require('config_e17n53_creeps_upgradeCreep')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e17n53_upgradeCreeps_srcOne = {
    run: function () {
        const roomName = 'E17N53'
        const config = config_e17n53_creeps_upgradeCreep

        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E17N53'
        )
        var upgradeCreep = new classes_creeps_upgradeCreep(
            config.creepStorage,
            config.creepSource,
            config.creepController,
            roomName,
            config.creepUpgradeFromPOS,
            config.creepContainer,
            config.creepParts
        )

        for (var creep in upgradeCreeps) {
            upgradeCreep.run(upgradeCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_upgradeCreeps_srcOne
