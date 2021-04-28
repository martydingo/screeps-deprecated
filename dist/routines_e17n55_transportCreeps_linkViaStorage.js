const config_e17n55_respawn = require('config_e17n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n55_transportCreeps_linkViaStorage = {
    run: function () {
        const room = 'E17N55'
        const origin = '605f381c97b43e119d443878'
        const origin2 = '606b2c38a96f636455f21d9e'
        const destination = '60642449e030746567b3178e'
        const spawn = Game.spawns['E17N55SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                (creep.ticksToLive > 150 || creep.ticksToLive == null) &&
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N55' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(
            origin,
            destination,
            room,
            [MOVE, CARRY, CARRY, CARRY, CARRY],
            RESOURCE_ENERGY,
            null,
            null,
            origin2
        )

        this.creepWatch(spawn, transportCreeps, transportCreep)
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (transportCreeps.length < config_e17n55_respawn.maxActive.transportCreep.linkViaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_transportCreeps_linkViaStorage
