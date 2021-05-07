const config_e17n53_creeps_transportCreep = require('config_e17n53_creeps_transportCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n53_transportCreeps_terminalViaLink = {
    run: function () {
        const config = config_e17n53_creeps_transportCreep['terminalViaLink']
        const roomName = 'E17N53'

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
            config.creepParts,
            config.creepResourceType,
            config.creepRemoteLimit,
            config.creepLocalLimit,
            config.creepSecondaryOrigin,
            config.creepSecondaryDestination
        )

        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_transportCreeps_terminalViaLink
