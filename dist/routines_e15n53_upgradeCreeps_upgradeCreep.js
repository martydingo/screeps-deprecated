const config_e15n53_respawn = require('config_e15n53_respawn')
const config_e15n53_sources = require('config_e15n53_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e15n53_upgradeCreeps_srcOne = {
    run: function () {
        const storage = '60883c1259886d435cb63a2c'
        const room = 'E15N53'
        const energySource = config_e15n53_sources.srcOne
        const roomController = '5bbcadc89099fc012e637d8e'
        const spawn = Game.spawns['E15N53SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E15N53'
        )

        const upgradeFromPOS = null
        var upgradeCreep = new classes_creeps_upgradeCreep(
            null,
            energySource,
            roomController,
            room,
            upgradeFromPOS,
            null,
            [WORK, CARRY, MOVE, MOVE]
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        if (
            upgradeCreeps.length < config_e15n53_respawn.maxActive.upgradeCreep
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

module.exports = routines_e15n53_upgradeCreeps_srcOne
