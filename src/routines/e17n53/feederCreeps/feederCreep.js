const config_e17n53_creeps_feederCreep = require('config_e17n53_creeps_feederCreep')
const classes_creeps_feederCreep = require('classes_creeps_feederCreep')

var routines_e17n53_feederCreeps_feederCreep = {
    run: function () {
        const roomName = 'E17N53'
        const config = config_e17n53_creeps_feederCreep

        var feederCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'feederCreep' &&
                creep.memory.creepRoom == 'E17N53'
        )

        var feederCreep = new classes_creeps_feederCreep(
            config.creepStorage.id,
            null,
            null,
            roomName,
            config.creepParts
        )

        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_feederCreeps_feederCreep
