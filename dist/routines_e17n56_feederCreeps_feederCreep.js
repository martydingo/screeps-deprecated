const config_e17n56_respawn = require('config_e17n56_respawn')
const config_e17n56_sources = require('config_e17n56_sources')
const classes_creeps_feederCreep = require('classes_creeps_feederCreep')

var routines_e17n56_feederCreeps_feederCreep = {
    run: function () {
        const room = 'E17N56'
        const origin = '6073eaedcea495164e18734a'
        const energySource = config_e17n56_sources.srcTwo
        const roomController = '5bbcade89099fc012e6381d6'
        const spawn = Game.spawns['E17N56SPA1']
        var feederCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'feederCreep' && creep.memory.creepRoom == 'E17N56'
        )
        var feederCreep = new classes_creeps_feederCreep(origin, energySource, roomController, room)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, feederCreeps, feederCreep)
        }
        this.creepAct(feederCreeps, feederCreep)
    },

    creepWatch: function (spawn, feederCreeps, feederCreep) {
        if (feederCreeps.length < config_e17n56_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (feederCreeps, feederCreep) {
        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e17n56_feederCreeps_feederCreep
