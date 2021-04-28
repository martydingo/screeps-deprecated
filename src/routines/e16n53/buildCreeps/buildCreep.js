const config_e16n53_respawn = require('config_e16n53_respawn')
const config_e16n53_sources = require('config_e16n53_sources')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e16n53_buildCreeps_srcOne = {
    run: function () {
        const room = 'E16N53'
        const energySource = config_e16n53_sources.srcOne
        const spawn = Game.spawns['E17N53SPA1']
        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == room
        )
        const storage = '60668763c15bf6dea0a3288e'

        var buildCreep = new classes_creeps_buildCreep(
            storage,
            energySource,
            room,
            null,
            [
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
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
            ]
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, buildCreeps, buildCreep)
        }
        this.creepAct(buildCreeps, buildCreep)
    },

    creepWatch: function (spawn, buildCreeps, buildCreep) {
        if (buildCreeps.length < config_e16n53_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (buildCreeps, buildCreep) {
        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e16n53_buildCreeps_srcOne
