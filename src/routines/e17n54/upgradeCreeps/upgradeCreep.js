const config_e17n54_respawn = require('config_e17n54_respawn')
const config_e17n54_sources = require('config_e17n54_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e17n54_upgradeCreeps_srcOne = {
    run: function () {
        const room = 'E17N54'
        const energySource = config_e17n54_sources.srcOne
        const roomController = '5bbcade89099fc012e6381e1'
        const spawn = Game.spawns['E17N55SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E17N54'
        )
        var upgradeCreep = new classes_creeps_upgradeCreep(
            null,
            energySource,
            roomController,
            room
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        if (
            upgradeCreeps.length < config_e17n54_respawn.maxActive.upgradeCreep
        ) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (upgradeCreeps, upgradeCreep) {
        for (var creep in upgradeCreeps) {
            upgradeCreep.run(upgradeCreeps[creep])
        }
    },
}

module.exports = routines_e17n54_upgradeCreeps_srcOne
