const config_e17n52_creeps_warriorCreep = require('config_e17n52_creeps_warriorCreep')
const classes_creeps_warriorCreep = require('classes_creeps_warriorCreep')

var routines_e17n52_warriorCreeps_warriorCreep = {
    run: function () {
        const room = 'E17N52'
        const config = config_e17n52_creeps_warriorCreep

        var warriorCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'warriorCreep' &&
                creep.memory.creepRoom == room
        )

        var warriorCreep = new classes_creeps_warriorCreep(
            room,
            config.creepParts
        )

        for (var creep in warriorCreeps) {
            warriorCreep.run(warriorCreeps[creep])
        }
    },
}

module.exports = routines_e17n52_warriorCreeps_warriorCreep
