const classes_creeps_factoryWorkerCreep = require('classes_creeps_factoryWorkerCreep')

var routines_e17n55_factoryWorkerCreeps_factoryWorkerCreep = {
    run: function () {
        const room = 'E17N55'
        var factoryWorkerCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'factoryWorkerCreep' &&
                creep.memory.creepRoom == room
        )
        var factoryWorkerCreep = new classes_creeps_factoryWorkerCreep(room)

        for (var creep in factoryWorkerCreeps) {
            factoryWorkerCreep.run(factoryWorkerCreeps[creep])
        }
    },
}
module.exports = routines_e17n55_factoryWorkerCreeps_factoryWorkerCreep
