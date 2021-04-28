const config_e17n56_respawn = require('config_e17n56_respawn')
const config_e17n56_sources = require('config_e17n56_sources')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')

var routines_e17n56_claimCreeps_claimCreep = {
    run: function () {
        const room = 'E17N56'
        const reserveController = false
        const spawn = Game.spawns['E17N55SPA1']
        const targetRoomPos = new RoomPosition(25, 25, 'E17N56')
        var claimCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'claimCreep' &&
                creep.memory.creepRoom == room
        )
        var claimCreep = new classes_creeps_claimCreep(
            room,
            targetRoomPos,
            reserveController
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, claimCreeps, claimCreep)
        }
        this.creepAct(claimCreeps, claimCreep)
    },

    creepWatch: function (spawn, claimCreeps, claimCreep) {
        if (claimCreeps.length < config_e17n56_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (claimCreeps, claimCreep) {
        for (var creep in claimCreeps) {
            claimCreep.run(claimCreeps[creep])
        }
    },
}

module.exports = routines_e17n56_claimCreeps_claimCreep
