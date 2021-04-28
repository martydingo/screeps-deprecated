config_e15n53_respawn = require('config_e15n53_respawn')
config_e15n53_sources = require('config_e15n53_sources')
classes_creeps_feederCreep = require('classes_creeps_feederCreep')

var routines_e15n53_feederCreeps_feederCreep = {
    run: function () {
        const room = 'E15N53'
        const origin = '60802877f9b1d6c57c1f2736'
        const energySource = config_e15n53_sources.srcTwo
        const roomController = '5bbcade89099fc012e6381d9'
        const spawn = Game.spawns['E15N53SPA1']
        var feederCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'feederCreep' && creep.memory.creepRoom == 'E15N53'
        )
        var feederCreep = new classes_creeps_feederCreep(origin, energySource, roomController, room, [MOVE, CARRY])

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, feederCreeps, feederCreep)
        }
        this.creepAct(feederCreeps, feederCreep)
    },

    creepWatch: function (spawn, feederCreeps, feederCreep) {
        if (feederCreeps.length < config_e15n53_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (feederCreeps, feederCreep) {
        for (var creep in feederCreeps) {
            feederCreep.run(feederCreeps[creep])
        }
    },
}

module.exports = routines_e15n53_feederCreeps_feederCreep
