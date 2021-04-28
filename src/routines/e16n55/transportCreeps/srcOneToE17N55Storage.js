const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e16n55_transportCreeps_srcOneToE17N55Storage = {
    run: function () {
        const room = 'E16N55'
        const origin = '60847dae416684815d3ef661'
        const destination = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N55SPA2']
        const remoteLimit = null
        const resourceType = RESOURCE_ENERGY
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E16N55' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(
            origin,
            destination,
            room,
            [
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                CARRY,
                CARRY,
                CARRY,
                CARRY,
            ],
            resourceType
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e16n55_respawn.maxActive.transportCreep.srcOneToE16N55Storage
        ) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_transportCreeps_srcOneToE17N55Storage
