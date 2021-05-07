const config_e16n54_creeps_buildCreep = require('config_e16n54_creeps_buildCreep')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')

var routines_e16n54_buildCreeps_srcOne = {
    run: function () {
        const roomName = 'E16N54'
        const config = config_e16n54_creeps_buildCreep

        var buildCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'buildCreep' &&
                creep.memory.creepRoom == roomName
        )

        var buildCreep = new classes_creeps_buildCreep(
            config.creepStorage.id,
            config.creepSource,
            roomName
        )

        for (var creep in buildCreeps) {
            buildCreep.run(buildCreeps[creep])
        }
    },
}
module.exports = routines_e16n54_buildCreeps_srcOne
