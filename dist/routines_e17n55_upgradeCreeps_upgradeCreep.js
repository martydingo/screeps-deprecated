const config_e17n55_respawn = require('config_e17n55_respawn')
const config_e17n55_sources = require('config_e17n55_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e17n55_upgradeCreeps_srcOne = {
    run: function () {
        const storage = '605f381c97b43e119d443878'
        const room = 'E17N55'
        const energySource = config_e17n55_sources.srcTwo
        const roomController = '5bbcade89099fc012e6381d9'
        const spawn = Game.spawns['E17N55SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E17N55'
        )

        const upgradeFromPOS = new RoomPosition(6, 41, 'E17N55')
        var upgradeCreep = new classes_creeps_upgradeCreep(
            storage,
            energySource,
            roomController,
            room,
            upgradeFromPOS,
            null,
            [
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
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
                CARRY,
                CARRY,
                CARRY,
                CARRY,
            ]
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        if (
            upgradeCreeps.length < config_e17n55_respawn.maxActive.upgradeCreep
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

module.exports = routines_e17n55_upgradeCreeps_srcOne
