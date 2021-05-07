const classes_creeps_lootCreep = require('classes_creeps_lootCreep')

var routines_e17n52_lootCreeps_lootCreep = {
    run: function () {
        const room = 'E17N52'
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
module.exports = routines_e17n52_lootCreeps_lootCreep
