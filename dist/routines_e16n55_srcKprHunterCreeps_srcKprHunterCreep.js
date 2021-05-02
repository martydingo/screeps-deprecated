const classes_creeps_srcKprHunterCreep = require('classes_creeps_srcKprHunterCreep')

var routines_e16n55_srcKprHunterCreeps_srcKprHunterCreep = {
    run: function () {
        const roomName = 'E16N55'

        var srcKprHunterCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'srcKprHunterCreep' &&
                creep.memory.creepRoom == roomName
        )
        var srcKprHunterCreep = new classes_creeps_srcKprHunterCreep(roomName)

        for (var creep in srcKprHunterCreeps) {
            srcKprHunterCreep.run(srcKprHunterCreeps[creep])
        }
    },
}
module.exports = routines_e16n55_srcKprHunterCreeps_srcKprHunterCreep
