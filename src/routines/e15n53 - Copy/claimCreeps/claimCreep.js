const config_e15n53_respawn = require('config_e15n53_respawn')
const config_e15n53_sources = require('config_e15n53_sources')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')

var routines_e15n53_claimCreeps_claimCreep = {
    run: function () {
        const room = 'E15N53'
        const reserveController = null
        const spawn = Game.spawns['E17N53SPA1']
        const targetRoomPos = new RoomPosition(25, 25, 'E15N53')
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
        //this.creepAct(claimCreeps, claimCreep)
    },

    creepWatch: function (spawn, claimCreeps, claimCreep) {
        if (claimCreeps.length < config_e15n53_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (claimCreeps, claimCreep) {
        for (var creep in claimCreeps) {
            claimCreep.run(claimCreeps[creep])
        }
    },
}

module.exports = routines_e15n53_claimCreeps_claimCreep