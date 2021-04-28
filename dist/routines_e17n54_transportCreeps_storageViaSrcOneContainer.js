config_e17n54_respawn = require('config_e17n54_respawn')
utils_creeps_renew = require('utils_creeps_renew')
classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n54_transportCreeps_storageViaSrcOneContainer = {
    run: function () {
        const room = 'E17N54'
        const origin = '6088023e12997133a7868587'
        const destination = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N55SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N54' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(origin,destination,room,[CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e17n54_respawn.maxActive.transportCreep
                .storageViaSrcOneContainer
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

module.exports = routines_e17n54_transportCreeps_storageViaSrcOneContainer
