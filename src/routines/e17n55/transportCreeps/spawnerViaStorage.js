const config_e17n55_creeps_transportCreep = require('config_e17n55_creeps_transportCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n55_transportCreeps_spawnerViaStorage = {
    run: function () {
        const config = config_e17n55_creeps_transportCreep['spawnerViaStorage']
        const roomName = 'E17N55'

        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepRoom == roomName &&
                creep.memory.creepClass == 'transportCreep' &&
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

module.exports = routines_e17n55_transportCreeps_spawnerViaStorage
