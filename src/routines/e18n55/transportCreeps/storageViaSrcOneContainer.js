const config_e18n55_creeps_transportCreep = require('config_e18n55_creeps_transportCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e18n55_transportCreeps_storageViaSrcOneContainer = {
    run: function () {
        const roomName = 'E18N55'
        const config =
            config_e18n55_creeps_transportCreep.storageViaSrcOneContainer

        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E18N55' &&
                creep.memory.creepOrigin.id == config.creepOrigin.id &&
                creep.memory.creepDestination.id == config.creepDestination.id
        )

        var transportCreep = new classes_creeps_transportCreep(
            config.creepOrigin.id,
            config.creepDestination.id,
            roomName,
            config.creepParts
        )

        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e18n55_transportCreeps_storageViaSrcOneContainer
