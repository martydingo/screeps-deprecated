const config_e16n55_respawn = require('config_e16n55_respawn')
const config_e17n55_sources = require('config_e17n55_sources')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e16n55_buildCreeps_buildCreep = {
    run: function () {
        const room = 'E16N55'
        const storage = '605f381c97b43e119d443878'
        const energySource = config_e17n55_sources.srcTwo
        const spawn = Game.spawns['E17N55SPA1']
        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == room
        )

        var buildCreep = new classes_creeps_buildCreep(storage, energySource)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, buildCreeps, buildCreep)
        }
        this.creepAct(buildCreeps, buildCreep)
    },

    creepWatch: function (spawn, buildCreeps, buildCreep) {
        if (buildCreeps.length < config_e16n55_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (buildCreeps, buildCreep) {
        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e16n55_buildCreeps_buildCreep
