const config_e17n53_creeps_keaniumCreep = require('config_e17n53_creeps_keaniumCreep')
const classes_creeps_keaniumCreep = require('classes_creeps_keaniumCreep')

var routines_e17n53_keaniumCreeps_keaniumCreep = {
    run: function () {
        const roomName = 'E17N53'
        const config = config_e17n53_creeps_keaniumCreep

        var keaniumCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'keaniumCreep' &&
                creep.memory.creepRoom == roomName
        )
        var keaniumCreep = new classes_creeps_keaniumCreep(
            config.creepKeanium,
            config.creepStorage.id,
            roomName
        )

        for (var creep in keaniumCreeps) {
            keaniumCreep.run(keaniumCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_keaniumCreeps_keaniumCreep
