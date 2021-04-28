config_e16n53_respawn = require('config_e16n53_respawn')
utils_creeps_renew = require('utils_creeps_renew')
classes_creeps_warriorCreep = require('classes_creeps_warriorCreep')

var routines_e16n53_warriorCreeps_warriorCreep = {
    run: function () {
        const room = 'E16N53'
        const spawn = Game.spawns['E17N53SPA1']
        var warriorCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'warriorCreep' &&
                creep.memory.creepRoom == room
        )

        //       var warriorCreep = new classes_creeps_warriorCreep(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        var warriorCreep = new classes_creeps_warriorCreep(room, [
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
        ])
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, warriorCreeps, warriorCreep)
        }
        this.creepAct(warriorCreeps, warriorCreep)
    },

    creepWatch: function (spawn, warriorCreeps, warriorCreep) {
        if (
            warriorCreeps.length < config_e16n53_respawn.maxActive.warriorCreep
        ) {
            warriorCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (warriorCreeps, warriorCreep) {
        for (var creep in warriorCreeps) {
            warriorCreep.run(warriorCreeps[creep])
        }
    },
}

module.exports = routines_e16n53_warriorCreeps_warriorCreep