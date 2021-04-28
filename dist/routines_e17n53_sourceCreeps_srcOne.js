const config_e17n53_respawn = require('config_e17n53_respawn')
const config_e17n53_sources = require('config_e17n53_sources')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e17n53_sourceCreeps_srcOne = {
    run: function () {
        const room = 'E17N53'
        const storage = '60668763c15bf6dea0a3288e'
        const energySource = config_e17n53_sources.srcOne
        const spawn = Game.spawns['E17N53SPA1']
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
            config_e17n53_respawn.maxActive.sourceCreep.srcOne
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

module.exports = routines_e17n53_sourceCreeps_srcOne
