const config_e17n55_respawn = require('config_e17n55_respawn')
const config_e17n55_sources = require('config_e17n55_sources')
const classes_creeps_feederCreep = require('classes_creeps_feederCreep')

var routines_e17n55_feederCreeps_feederCreep = {
    run: function () {
        const room = 'E17N55'
        const origin = '608478c659886d383bb4eebd'
        const energySource = config_e17n55_sources.srcTwo
        const roomController = '5bbcade89099fc012e6381d9'
        const spawn = Game.spawns['E17N55SPA1']
        var feederCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'feederCreep' &&
                creep.memory.creepRoom == 'E17N55'
        )
        var feederCreep = new classes_creeps_feederCreep(origin,energySource,roomController,room);
        )

        this.creepWatch(spawn, feederCreeps, feederCreep)
        this.creepAct(feederCreeps, feederCreep)
    },

    creepWatch: function (spawn, feederCreeps, feederCreep) {
        if (feederCreeps.length < config_e17n55_respawn.maxActive.feederCreep) {
            spawn.memory.spawnBlocked = 'feederCreep'
            feederCreep.spawnCreep(spawn)
        } else {
            if (spawn.memory.spawnBlocked) {
                if (spawn.memory.spawnBlocked == 'feederCreep') {
                    delete spawn.memory.spawnBlocked
                }
            }
        }
    },

    creepAct: function (feederCreeps, feederCreep) {
        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_feederCreeps_feederCreep
