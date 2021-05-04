const classes_creeps_lootCreep = require('classes_creeps_lootCreep')

var routines_e17n53_lootCreeps_lootCreep = {
    run: function () {
        const roomName = 'E17N53'

        var lootCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'lootCreep' &&
                creep.memory.creepRoom == roomName
        )
        var lootCreep = new classes_creeps_lootCreep(roomName)

        for (var creep in lootCreeps) {
            lootCreep.run(lootCreeps[creep])
        }
    },
}
module.exports = routines_e17n53_lootCreeps_lootCreep
