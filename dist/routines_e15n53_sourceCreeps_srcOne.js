const config_e15n53_respawn = require('config_e15n53_respawn')
const config_e15n53_sources = require('config_e15n53_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e15n53_sourceCreeps_srcOne = {
    run: function () {
        const room = 'E15N53'
        const energySource = config_e15n53_sources.srcOne
        const storage = '60883c1259886d435cb63a2c'
        const spawn = Game.spawns['E15N53SPA1']
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
            [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, CARRY]
        )
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, sourceCreeps, sourceCreep)
        }
        this.creepAct(sourceCreeps, sourceCreep, spawn)
    },

    creepWatch: function (spawn, sourceCreeps, sourceCreep) {
        if (
            sourceCreeps.length <
            config_e15n53_respawn.maxActive.sourceCreep.srcOne
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

module.exports = routines_e15n53_sourceCreeps_srcOne
