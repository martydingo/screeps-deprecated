const config_e17n52_creeps_claimCreep = require('config_e17n52_creeps_claimCreep')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')

var routines_e17n52_claimCreeps_claimCreep = {
    run: function () {
        const roomName = 'E17N52'
        const config = config_e17n52_creeps_claimCreep
        var claimCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'claimCreep' &&
                creep.memory.creepRoom == roomName
        )
        var claimCreep = new classes_creeps_claimCreep(
            roomName,
            config.creepReserveController
        )

        for (var creep in claimCreeps) {
            claimCreep.run(claimCreeps[creep])
        }
    },
}

module.exports = routines_e17n52_claimCreeps_claimCreep
