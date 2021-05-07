const config_e16n55_creeps_transportCreep = require('config_e16n55_creeps_transportCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e16n55_transportCreeps_storageViaSrcOneContainer = {
    run: function () {
        const roomName = 'E16N55'
        const config =
            config_e16n55_creeps_transportCreep.storageViaSrcOneContainer

        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == roomName &&
                creep.memory.creepOrigin.id == config.creepOrigin.id &&
                creep.memory.creepDestination.id == config.creepDestination.id
        )
        var transportCreep = new classes_creeps_transportCreep(
            config.creepOrigin.id,
            config.creepDestination.id,
            roomName,
            config.creepParts,
            config.creepResourceType,
            config.creepRemoteLimit,
            config.creepLocalLimit,
            config.creepSecondaryOrigin
        )

        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_transportCreeps_storageViaSrcOneContainer
