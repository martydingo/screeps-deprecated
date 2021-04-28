const config_e17n56_respawn = require('config_e17n56_respawn')
const classes_creeps_scoutCreep = require('classes_creeps_scoutCreep')

var routines_e17n56_scoutCreeps_scoutCreep = {
    run: function () {
        const room = 'E17N56'
        const spawn = Game.spawns['E17N55SPA1']
        const targetPos = new RoomPosition(25, 25, room)
        var scoutCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'scoutCreep' &&
                creep.memory.creepRoom == room
        )
        var scoutCreep = new classes_creeps_scoutCreep(room, [MOVE], targetPos)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, scoutCreeps, scoutCreep)
        }
        this.creepAct(scoutCreeps, scoutCreep)
    },

    creepWatch: function (spawn, scoutCreeps, scoutCreep) {
        if (scoutCreeps.length < config_e17n56_respawn.maxActive.scoutCreep) {
            scoutCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (scoutCreeps, scoutCreep) {
        for (var creep in scoutCreeps) {
            if (scoutCreeps[creep].memory.creepRoom == room) {
                scoutCreep.run(scoutCreeps[creep])
            }
        }
    },
}

module.exports = routines_e17n56_scoutCreeps_scoutCreep
