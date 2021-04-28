const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_warriorCreep = require('classes_creeps_warriorCreep')

var routines_e16n55_warriorCreeps_warriorCreep = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        const guardPost = new RoomPosition(44, 33, room)
        var warriorCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'warriorCreep' &&
                creep.memory.creepRoom == room
        )

        var warriorCreep = new classes_creeps_warriorCreep(room)
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, warriorCreeps, warriorCreep)
        }
        this.creepAct(warriorCreeps, warriorCreep)
    },

    creepWatch: function (spawn, warriorCreeps, warriorCreep) {
        if (
            warriorCreeps.length < config_e16n55_respawn.maxActive.warriorCreep
        ) {
            warriorCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (warriorCreeps, warriorCreep) {
        for (var creep in warriorCreeps) {
            warriorCreep.run(warriorCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_warriorCreeps_warriorCreep
