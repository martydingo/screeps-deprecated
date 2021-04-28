const config_e16n55_respawn = require('config_e16n55_respawn')
const config_e16n55_sources = require('config_e16n55_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e16n55_sourceCreeps_srcTwo = {
    run: function () {
        const room = 'E16N55'
        const energySource = config_e16n55_sources.srcTwo
        const storage = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N55SPA1']
        var sourceCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'sourceCreep' && creep.memory.creepSource == energySource
        )
        var sourceCreep = new classes_creeps_sourceCreep(storage, energySource, room, [
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
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
        ])

        this.creepWatch(spawn, sourceCreeps, sourceCreep)
        this.creepAct(sourceCreeps, sourceCreep, spawn)
    },

    creepWatch: function (spawn, sourceCreeps, sourceCreep) {
        if (sourceCreeps.length < config_e16n55_respawn.maxActive.sourceCreep.srcTwo) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (sourceCreeps, sourceCreep) {
        for (var creep in sourceCreeps) {
            sourceCreep.run(sourceCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_sourceCreeps_srcTwo
