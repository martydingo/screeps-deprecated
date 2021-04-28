const config_e17n54_respawn = require('config_e17n54_respawn')
const config_e17n54_sources = require('config_e17n54_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e17n54_sourceCreeps_srcOne = {
    run: function () {
        const room = 'E17N54'
        const energySource = config_e17n54_sources.srcOne
        const storage = '6088023e12997133a7868587'
        const spawn = Game.spawns['E17N55SPA1']
        var sourceCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'sourceCreep' &&
                creep.memory.creepSource == energySource
        )

        var sourceCreep = new classes_creeps_sourceCreep(
            storage,
            energySource,
            room,
            [
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
                CARRY,
            ]
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, sourceCreeps, sourceCreep)
        }
        this.creepAct(sourceCreeps, sourceCreep, spawn)
    },

    creepWatch: function (spawn, sourceCreeps, sourceCreep) {
        if (
            sourceCreeps.length <
            config_e17n54_respawn.maxActive.sourceCreep.srcOne
        ) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (sourceCreeps, sourceCreep) {
        for (var creep in sourceCreeps) {
            sourceCreep.run(sourceCreeps[creep])
        }
    },
}

module.exports = routines_e17n54_sourceCreeps_srcOne
