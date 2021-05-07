const config_e16n53_creeps_warriorCreep = require('config_e16n53_creeps_warriorCreep')
const classes_creeps_warriorCreep = require('classes_creeps_warriorCreep')

var routines_e16n53_warriorCreeps_warriorCreep = {
    run: function () {
        const room = 'E16N53'
        const config = config_e16n53_creeps_warriorCreep

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

module.exports = routines_e16n53_warriorCreeps_warriorCreep
