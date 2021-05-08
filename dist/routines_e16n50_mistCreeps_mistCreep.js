const classes_creeps_mistCreep = require('classes_creeps_mistCreep')

var routines_e16n50_mistCreeps_mistCreep = {
    run: function () {
        const roomName = 'E16N50'

        var mistCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'mistCreep' &&
                creep.memory.creepRoom == roomName
        )

        var mistCreep = new classes_creeps_mistCreep(roomName)

        for (var creep in mistCreeps) {
            mistCreep.run(mistCreeps[creep])
        }
    },
}

module.exports = routines_e16n50_mistCreeps_mistCreep
