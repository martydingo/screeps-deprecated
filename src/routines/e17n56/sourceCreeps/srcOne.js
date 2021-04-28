const config_e17n56_respawn = require('config_e17n56_respawn')
const config_e17n56_sources = require('config_e17n56_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e17n56_sourceCreeps_srcOne = {
    run: function () {
        const room = 'E17N56'
        const energySource = config_e17n56_sources.srcOne
        const spawn = Game.spawns['E17N56SPA1']
        var sourceCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'sourceCreep' &&
                creep.memory.creepSource == energySource
        )

        var sourceCreep = new classes_creeps_sourceCreep(null,energySource,room,[WORK,WORK,MOVE,CARRY]);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, sourceCreeps, sourceCreep)
        }
        this.creepAct(sourceCreeps, sourceCreep, spawn)
    },

    creepWatch: function (spawn, sourceCreeps, sourceCreep) {
        if (
            sourceCreeps.length <
            config_e17n56_respawn.maxActive.sourceCreep.srcOne
        ) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (sourceCreeps, sourceCreep, spawn) {
        for (var creep in sourceCreeps) {
            sourceCreep.run(sourceCreeps[creep])
        }
    },
}

module.exports = routines_e17n56_sourceCreeps_srcOne
