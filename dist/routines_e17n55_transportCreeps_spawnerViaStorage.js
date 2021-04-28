const config_e17n55_respawn = require('config_e17n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n55_transportCreeps_spawnerViaStorage = {
    run: function () {
        const room = 'E17N55'
        const origin = '605f381c97b43e119d443878'
        const destination = '605cd59d5ead6e1b5eb90b26'
        const spawn = Game.spawns['E17N55SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N55' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(origin, destination, room, [
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
        ])

        this.creepWatch(spawn, transportCreeps, transportCreep)
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (transportCreeps.length < config_e17n55_respawn.maxActive.transportCreep.spawnerViaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_transportCreeps_spawnerViaStorage
