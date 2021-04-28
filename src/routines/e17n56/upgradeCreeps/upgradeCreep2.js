const config_e17n56_respawn = require('config_e17n56_respawn')
const config_e17n56_sources = require('config_e17n56_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e17n56_upgradeCreeps_upgradeCreep2 = {
    run: function () {
        const storage = '606b050239c8c35403a0b080'
        const room = 'E17N56'
        const energySource = config_e17n56_sources.srcOne
        const roomController = '5bbcade89099fc012e6381d6'
        const spawn = Game.spawns['E17N56SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'upgradeCreep' &&
                creep.memory.creepRoom == 'E17N56'
        )

        const upgradeFromPOS = null
        var upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,upgradeFromPOS,'606b050239c8c35403a0b080',[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        console.log(config_e17n56_respawn.maxActive.upgradeCreep2)

        if (
            upgradeCreeps.length < config_e17n56_respawn.maxActive.upgradeCreep2
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

module.exports = routines_e17n56_upgradeCreeps_upgradeCreep2
