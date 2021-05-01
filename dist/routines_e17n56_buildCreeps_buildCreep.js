const config_e17n56_respawn = require('config_e17n56_respawn')
const config_e17n56_sources = require('config_e17n56_sources')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e17n56_buildCreeps_srcOne = {
    run: function () {
        const room = 'E17N56'
        const energySource = config_e17n56_sources.srcTwo
        const spawn = Game.spawns['E17N56SPA1']
        const storage = '6073eaedcea495164e18734a'
        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == room
        )

        var buildCreep = new classes_creeps_buildCreep(
            storage,
            energySource,
            room,
            500,
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
                WORK,
                WORK,
                WORK,
                WORK,
                WORK,
                MOVE,
                MOVE,
                MOVE,
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
        if (buildCreeps.length < config_e17n56_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (buildCreeps, buildCreep) {
        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e17n56_buildCreeps_srcOne
