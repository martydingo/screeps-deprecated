const config_e16n54_respawn = require('config_e16n54_respawn')
const config_e16n54_sources = require('config_e16n54_sources')
const classes_creeps_snipeCreep = require('classes_creeps_snipeCreep')

var routines_e16n54_snipeCreeps_snipeCreep = {
    run: function () {
        const room = 'E16N54'
        const spawn = Game.spawns['E17N55SPA1']
        const snipePos = new RoomPosition(37, 41, room)
        var snipeCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'snipeCreep'
        )

        var snipeCreep = new classes_creeps_snipeCreep(snipePos, room)
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, snipeCreeps, snipeCreep)
        }
        this.creepAct(snipeCreeps, snipeCreep)
    },

    creepWatch: function (spawn, snipeCreeps, snipeCreep) {
        if (snipeCreeps.length < config_e16n54_respawn.maxActive.snipeCreep) {
            snipeCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (snipeCreeps, snipeCreep) {
        for (var creep in snipeCreeps) {
            snipeCreep.run(snipeCreeps[creep])
        }
    },
}

module.exports = routines_e16n54_snipeCreeps_snipeCreep
