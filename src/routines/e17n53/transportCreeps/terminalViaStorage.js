const config_e17n53_creeps_transportCreep = require('config_e17n53_creeps_transportCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n53_transportCreeps_terminalViaStorage = {
    run: function () {
        const roomName = 'E17N53'
        const config = config_e17n53_creeps_transportCreep.terminalViaStorage

        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N53' &&
                creep.memory.creepOrigin.id == config.origin.id &&
                creep.memory.creepDestination.id == config.destination.id
        )

        var transportCreep = new classes_creeps_transportCreep(
            config.creepOrigin.id,
            config.creepDestination.id,
            roomName,
            config.creepParts,
            config.creepResourceType,
            config.creepRemoteLimit
        )

        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_transportCreeps_terminalViaStorage
