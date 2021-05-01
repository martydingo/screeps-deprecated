const classes_creeps_feederCreep = require('classes_creeps_feederCreep')
const config_e17n55_creeps_feederCreep = require('config_e17n55_creeps_feederCreep')

var routines_e17n55_feederCreeps_feederCreep = {
    run: function () {
        const roomName = 'E17N55'
        const config = config_e17n55_creeps_feederCreep

        var feederCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'feederCreep' &&
                creep.memory.creepRoom == roomName
        )

        var feederCreep = new classes_creeps_feederCreep(
            config.creepStorage.id,
            null,
            null,
            roomName
        )

        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e17n55_feederCreeps_feederCreep
