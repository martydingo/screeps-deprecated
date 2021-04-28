const config_e17n56_respawn = require('config_e17n56_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n56_transportCreeps_upgradeContainerviaStorage = {
    run: function () {
        const room = 'E17N56'
        const origin = '6073eaedcea495164e18734a'
        const destination = '607adf9af2a970d033902c00'
        const spawn = Game.spawns['E17N56SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N56' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY]);
        )

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e17n56_respawn.maxActive.transportCreep
                .upgradeContainerviaStorage
        ) {
            transportCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (transportCreeps, transportCreep) {
        for (var creep in transportCreeps) {
            transportCreep.run(transportCreeps[creep])
        }
    },
}

module.exports = routines_e17n56_transportCreeps_upgradeContainerviaStorage
