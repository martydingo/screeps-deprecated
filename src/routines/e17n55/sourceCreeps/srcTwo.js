const config_e17n55_creeps_sourceCreep = require('config_e17n55_creeps_sourceCreep')
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')

var routines_e17n55_sourceCreeps_srcTwo = {
    run: function () {
        const roomName = 'E17N55'
        const config = config_e17n55_creeps_sourceCreep['srcTwo']
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

module.exports = routines_e17n55_sourceCreeps_srcTwo
