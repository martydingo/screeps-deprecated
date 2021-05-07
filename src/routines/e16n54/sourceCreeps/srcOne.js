const config_e16n54_creeps_sourceCreep = require('config_e16n54_creeps_sourceCreep')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e16n54_sourceCreeps_srcOne = {
    run: function () {
        const roomName = 'E16N54'
        const config = config_e16n54_creeps_sourceCreep['srcOne']
        var sourceCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'sourceCreep' &&
                creep.memory.creepSource == config.creepSource
        )

        var sourceCreep = new classes_creeps_sourceCreep(
            config.creepStorage,
            config.creepSource,
            roomName,
            config.creepParts
        )

        for (var creep in sourceCreeps) {
            sourceCreep.run(sourceCreeps[creep])
        }
    },
}

module.exports = routines_e16n54_sourceCreeps_srcOne
