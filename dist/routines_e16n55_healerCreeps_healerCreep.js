const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_healerCreep = require('classes_creeps_healerCreep')

var routines_e16n55_healerCreeps_healerCreep = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        var healerCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'healerCreep' &&
                creep.memory.creepRoom == this.roomName
        )
        var healerCreep = new classes_creeps_healerCreep(room)
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, healerCreeps, healerCreep)
        }
        this.creepAct(healerCreeps, healerCreep)
    },

    creepWatch: function (spawn, healerCreeps, healerCreep) {
        if (healerCreeps.length < config_e16n55_respawn.maxActive.healerCreep) {
            healerCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (healerCreeps, healerCreep) {
        for (var creep in healerCreeps) {
            healerCreep.run(healerCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_healerCreeps_healerCreep
