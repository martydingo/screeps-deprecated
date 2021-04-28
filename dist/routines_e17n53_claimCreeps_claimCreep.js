const config_e17n53_respawn = require('config_e17n53_respawn')
const config_e17n53_sources = require('config_e17n53_sources')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')

var routines_e17n53_claimCreeps_claimCreep = {
    run: function () {
        const room = 'E17N53'
        const energySource = config_e17n53_sources.srcOne
        const roomController = '5bbcade89099fc012e6381e1'
        const spawn = Game.spawns['E17N55SPA1']
        const targetRoomPos = new RoomPosition(25, 25, 'E17N53')
        var claimCreeps = _.filter(Game.creeps, (creep) => creep.memory.creepClass == 'claimCreep')
        var claimCreep = new classes_creeps_claimCreep(room, targetRoomPos)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, claimCreeps, claimCreep)
        }
        this.creepAct(claimCreeps, claimCreep)
    },

    creepWatch: function (spawn, claimCreeps, claimCreep) {
        if (claimCreeps.length < config_e17n53_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (claimCreeps, claimCreep) {
        for (var creep in claimCreeps) {
            claimCreep.run(claimCreeps[creep])
        }
    },
}

module.exports = routines_e17n53_claimCreeps_claimCreep
