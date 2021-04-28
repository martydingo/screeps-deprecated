const config_e17n55_respawn = require('config_e17n55_respawn')
const config_e17n55_sources = require('config_e17n55_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e17n55_sourceCreeps_srcTwo = {
    run: function () {
        const room = 'E17N55'
        const energySource = config_e17n55_sources.srcTwo
        const spawn = Game.spawns['E17N55SPA1']
        var sourceCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'sourceCreep' && creep.memory.creepSource == energySource
        )
        var sourceCreep = new classes_creeps_sourceCreep('60871e0f59886d6f70b5d713', energySource, room, [
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            MOVE,
            CARRY,
        ])

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, sourceCreeps, sourceCreep)
        }
        this.creepAct(sourceCreeps, sourceCreep, spawn)
    },

    creepWatch: function (spawn, sourceCreeps, sourceCreep) {
        if (sourceCreeps.length < config_e17n55_respawn.maxActive.sourceCreep.srcTwo) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (sourceCreeps, sourceCreep) {
        for (var creep in sourceCreeps) {
            sourceCreep.run(sourceCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_sourceCreeps_srcTwo
