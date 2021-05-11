const classes_creeps_transportCreep = require('classes_creeps_transportCreep')
const config_e16n53_creeps_transportCreep = require('config_e16n53_creeps_transportCreep')

var routines_e16n53_transportCreeps_storageViaSrcTwoContainer = {
    run: function () {
        const roomName = 'E16N53'
        const config =
            config_e16n53_creeps_transportCreep.storageViaSrcTwoContainer

        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == roomName &&
                creep.memory.creepOrigin == config.creepOrigin &&
                creep.memory.creepDestination.id == config.creepDestination.id
        )
        if (transportCreeps.length > 0) {
            var transportCreep = new classes_creeps_transportCreep(
                config.creepOrigin,
                config.creepDestination.id,
                roomName,
                config.creepParts
            )

            for (var creep in transportCreeps) {
                transportCreep.run(transportCreeps[creep])
            }
        }
    },
}

module.exports = routines_e16n53_transportCreeps_storageViaSrcTwoContainer
