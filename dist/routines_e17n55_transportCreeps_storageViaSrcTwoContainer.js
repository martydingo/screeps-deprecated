const config_e17n55_respawn = require('config_e17n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n55_transportCreeps_storageViaSrcTwoContainer = {
    run: function () {
        const room = 'E17N55'
        const origin = '60871e0f59886d6f70b5d713'
        const destination = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N55SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N55' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY]);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e17n55_respawn.maxActive.transportCreep
                .storageViaSrcTwoContainer
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

module.exports = routines_e17n55_transportCreeps_storageViaSrcTwoContainer
