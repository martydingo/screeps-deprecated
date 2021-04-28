const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_lootCreep = require('classes_creeps_lootCreep')

var routines_e16n55_lootCreeps_lootCreep = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        const storage = '60847dae416684815d3ef661'
        var lootCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'lootCreep' && creep.memory.creepRoom == room
        )
        var lootCreep = new classes_creeps_lootCreep(room, storage)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, lootCreeps, lootCreep)
        }
        this.creepAct(lootCreeps, lootCreep)
    },

    creepWatch: function (spawn, lootCreeps, lootCreep) {
        if (lootCreeps.length < config_e16n55_respawn.maxActive.lootCreep) {
            lootCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (lootCreeps, lootCreep) {
        for (var creep in lootCreeps) {
            lootCreep.run(lootCreeps[creep])
        }
    },
}
module.exports = routines_e16n55_lootCreeps_lootCreep
