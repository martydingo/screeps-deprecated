const config_e17n54_respawn = require('config_e17n54_respawn')
const classes_creeps_lootCreep = require('classes_creeps_lootCreep')

var routines_e17n54_lootCreeps_lootCreep = {
    run: function () {
        const room = 'E17N54'
        const spawn = Game.spawns['E17N53SPA1']
        const storage = '605f381c97b43e119d443878'
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
        if (lootCreeps.length < config_e17n54_respawn.maxActive.lootCreep) {
            lootCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (lootCreeps, lootCreep) {
        for (var creep in lootCreeps) {
            lootCreep.run(lootCreeps[creep])
        }
    },
}
module.exports = routines_e17n54_lootCreeps_lootCreep
