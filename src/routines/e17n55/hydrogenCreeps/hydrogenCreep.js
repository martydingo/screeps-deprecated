const config_e17n55_creeps_hydrogenCreep = require('config_e17n55_creeps_hydrogenCreep')
const classes_creeps_hydrogenCreep = require('classes_creeps_hydrogenCreep')

var routines_e17n55_hydrogenCreeps_hydrogenCreep = {
    run: function () {
        const roomName = 'E17N55'
        const config = config_e17n55_creeps_hydrogenCreep

        var hydrogenCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'hydrogenCreep' &&
                creep.memory.creepRoom == roomName
        )
        var hydrogenCreep = new classes_creeps_hydrogenCreep(
            config.creepHydrogen,
            config.creepStorage.id,
            roomName
        )

        for (var creep in hydrogenCreeps) {
            hydrogenCreep.run(hydrogenCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_hydrogenCreeps_hydrogenCreep
