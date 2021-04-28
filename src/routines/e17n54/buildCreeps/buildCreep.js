const config_e17n54_respawn = require('config_e17n54_respawn')
const config_e17n54_sources = require('config_e17n54_sources')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e17n54_buildCreeps_buildCreep = {
    run: function () {
        const room = 'E17N54'
        const energySource = config_e17n54_sources.srcOne
        const spawn = Game.spawns['E17N55SPA2']
        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == room
        )

        var buildCreep = new classes_creeps_buildCreep(null, energySource, room)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, buildCreeps, buildCreep)
        }
        this.creepAct(buildCreeps, buildCreep)
    },

    creepWatch: function (spawn, buildCreeps, buildCreep) {
        if (buildCreeps.length < config_e17n54_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (buildCreeps, buildCreep) {
        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e17n54_buildCreeps_buildCreep
