const config_e18n55_respawn = require('config_e18n55_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e18n55_transportCreeps_storageViaSrcOneContainer = {
    run: function () {
        const room = 'E18N55'
        const origin = '6087fa31d4876707ca2110d7'
        const destination = '605f381c97b43e119d443878'
        const spawn = Game.spawns['E17N55SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E18N55' &&
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
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                MOVE,
                WORK,
                WORK,
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
            ]
        )
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e18n55_respawn.maxActive.transportCreep
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

module.exports = routines_e18n55_transportCreeps_storageViaSrcOneContainer
