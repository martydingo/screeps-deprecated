const config_e17n52_respawn = require('config_e17n52_respawn')
const config_e17n52_sources = require('config_e17n52_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e17n52_upgradeCreeps_srcOne = {
    run: function () {
        const room = 'E17N52'
        const storage = '60668763c15bf6dea0a3288e'
        const energySource = config_e17n52_sources.srcOne
        const roomController = '5bbcade89099fc012e6381e1'
        const spawn = Game.spawns['E17N52SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E17N52'
        )
        var upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,null,null,[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY]);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        if (
            upgradeCreeps.length < config_e17n52_respawn.maxActive.upgradeCreep
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

module.exports = routines_e17n52_upgradeCreeps_srcOne
