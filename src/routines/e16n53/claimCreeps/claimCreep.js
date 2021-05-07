const config_e16n53_creeps_claimCreep = require('config_e16n53_creeps_claimCreep')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')

var routines_e16n53_claimCreeps_claimCreep = {
    run: function () {
        const roomName = 'E16N53'
        const config = config_e16n53_creeps_claimCreep
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

module.exports = routines_e16n53_claimCreeps_claimCreep
