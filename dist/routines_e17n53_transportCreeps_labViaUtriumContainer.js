const config_e17n55_respawn = require('config_e17n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n55_transportCreeps_labViaUtriumContainer = {
    run: function () {
        const room = 'E17N55'
        const origin = '60673c5129245f65a5d6fa3d'
        const destination = '606a0a48f353172e7b3ab84b' //3rd lab 60691f22d5ec72f53a831b90
        const spawn = Game.spawns['E17N55SPA1']
        const resourceType = RESOURCE_UTRIUM
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
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
            resourceType
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (transportCreeps.length < config_e17n55_respawn.maxActive.transportCreep.labViaUtriumContainer) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_transportCreeps_labViaUtriumContainer
