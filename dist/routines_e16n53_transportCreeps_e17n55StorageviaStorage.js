const config_e16n53_respawn = require('config_e16n53_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e16n53_transportCreeps_e17n55StorageviaStorage = {
    run: function () {
        const room = 'E16N53'
        const origin = '60668763c15bf6dea0a3288e'
        const destination = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N53SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E16N53' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        const localLimit = '5000'

        var transportCreep = new classes_creeps_transportCreep(
            origin,
            destination,
            room,
            [
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
            ],
            RESOURCE_ENERGY,
            null,
            localLimit
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (transportCreeps.length < config_e16n53_respawn.maxActive.transportCreep.e17n55StorageviaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e16n53_transportCreeps_e17n55StorageviaStorage
