const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_snipeCreep = require('classes_creeps_snipeCreep')

var routines_e16n55_snipeCreeps_snipeCreep = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        const snipePos = new RoomPosition(44, 33, room)
        var snipeCreeps = _.filter(Game.creeps, (creep) => creep.memory.creepClass == 'snipeCreep')

        var snipeCreep = new classes_creeps_snipeCreep(snipePos, room)
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, snipeCreeps, snipeCreep)
        }
        this.creepAct(snipeCreeps, snipeCreep)
    },

    creepWatch: function (spawn, snipeCreeps, snipeCreep) {
        if (snipeCreeps.length < config_e16n55_respawn.maxActive.snipeCreep) {
            snipeCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (snipeCreeps, snipeCreep) {
        for (var creep in snipeCreeps) {
            snipeCreep.run(snipeCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_snipeCreeps_snipeCreep
