const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

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
            ]
        )

        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n54_transportCreeps_storageViaSrcOneContainer
