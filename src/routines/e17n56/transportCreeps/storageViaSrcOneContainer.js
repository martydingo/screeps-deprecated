const config_e17n56_respawn = require('config_e17n56_respawn')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')

var routines_e17n56_transportCreeps_storageViaSrcOneContainer = {
    run: function () {
        const room = 'E17N56'
        const origin = '60685f6d0db288d32283c306'
        const origin2 = '6079cbeef913971725c02bc3'
        const destination = '6073eaedcea495164e18734a'
        const spawn = Game.spawns['E17N56SPA1']
        var transportCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'transportCreep' &&
                creep.memory.creepRoom == 'E17N56' &&
                creep.memory.creepOrigin.id == origin &&
                creep.memory.creepDestination.id == destination
        )
        var transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,CARRY,CARRY,CARRY],RESOURCE_ENERGY,null,null,origin2);

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, transportCreeps, transportCreep)
        }
        this.creepAct(transportCreeps, transportCreep)
    },

    creepWatch: function (spawn, transportCreeps, transportCreep) {
        if (
            transportCreeps.length <
            config_e17n56_respawn.maxActive.transportCreep
                .storageViaSrcOneContainer
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

module.exports = routines_e17n56_transportCreeps_storageViaSrcOneContainer
