const classes_creeps_lootCreep = require('classes_creeps_lootCreep')

var routines_e16n54_lootCreeps_lootCreep = {
    run: function () {
        const room = 'E16N54'
        var lootCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'lootCreep' &&
                creep.memory.creepRoom == room
        )
        var lootCreep = new classes_creeps_lootCreep(room)

        for (var creep in lootCreeps) {
            lootCreep.run(lootCreeps[creep])
        }
    },
}
module.exports = routines_e16n54_lootCreeps_lootCreep
