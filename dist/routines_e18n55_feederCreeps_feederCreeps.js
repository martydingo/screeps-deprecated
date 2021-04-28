const config_e18n55_respawn = require('config_e18n55_respawn')
const config_e18n55_sources = require('config_e18n55_sources')
const classes_creeps_feederCreep = require('classes_creeps_feederCreep')

var routines_e18n55_feederCreeps_feederCreep = {
    run: function () {
        const room = 'E18N55'
        const energySource = config_e18n55_sources.srcTwo
        const roomController = '5bbcade89099fc012e6381d9'
        const spawn = Game.spawns['E17N55SPA1']
        var feederCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'feederCreep'
        )
        var feederCreep = new classes_creeps_feederCreep(
            energySource,
            roomController,
            room
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, feederCreeps, feederCreep)
        }
        this.creepAct(feederCreeps, feederCreep)
    },

    creepWatch: function (spawn, feederCreeps, feederCreep) {
        if (feederCreeps.length < config_e18n55_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (feederCreeps, feederCreep) {
        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e18n55_feederCreeps_feederCreep
