const config_e17n52_creeps_buildCreep = require('config_e17n52_creeps_buildCreep')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e17n52_buildCreeps_srcOne = {
    run: function () {
        const roomName = 'E17N52'
        const config = config_e17n52_creeps_buildCreep

        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == roomName
        )

        var buildCreep = new classes_creeps_buildCreep(
            config.creepStorage.id,
            config.creepSource,
            roomName,
            null,
            config.creepParts
        )

        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e17n52_buildCreeps_srcOne
