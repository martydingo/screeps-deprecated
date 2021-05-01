const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_oxygenCreep = require('classes_creeps_oxygenCreep')

var routines_e16n55_oxygenCreeps_srcOne = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        const oxygen = '5bbcb7b61e7d3f3cbe2509ed'
        const oxygenStore = '605f381c97b43e119d443878'

        var oxygenCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'oxygenCreep' &&
                creep.memory.creepRoom == 'E16N55'
        )
        var oxygenCreep = new classes_creeps_oxygenCreep(
            oxygen,
            oxygenStore,
            room
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, oxygenCreeps, oxygenCreep)
        }
        this.creepAct(oxygenCreeps, oxygenCreep)
    },

    creepWatch: function (spawn, oxygenCreeps, oxygenCreep) {
        if (oxygenCreeps.length < config_e16n55_respawn.maxActive.oxygenCreep) {
            oxygenCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (oxygenCreeps, oxygenCreep) {
        for (var creep in oxygenCreeps) {
            oxygenCreep.run(oxygenCreeps[creep])
        }
    },
}

module.exports = routines_e16n55_oxygenCreeps_srcOne
