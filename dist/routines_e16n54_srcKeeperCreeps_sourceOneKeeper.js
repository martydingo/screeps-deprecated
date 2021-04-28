const config_e16n54_respawn = require('config_e16n54_respawn')
const classes_creeps_sourceOneKeeper = require('classes_creeps_srcKeeperCreep')

var routines_e16n54_srcKeeperCreeps_sourceOneKeeper = {
    run: function () {
        const room = 'E16N54'
        const spawn = Game.spawns['E17N53SPA1']
        const campPos = new RoomPosition(37, 9, room)
        const lab = '606a0fa296af2a502a7be7c7'
        var srcKeeperCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'srcKeeperCreep' &&
                creep.memory.creepRoom == room &&
                creep.memory.creepRoom == room &&
                creep.memory.creepCampPos.x == campPos.x &&
                creep.memory.creepCampPos.y == campPos.y
        )

        var srcKeeperCreep = new classes_creeps_sourceOneKeeper(room, campPos, lab)
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, srcKeeperCreeps, srcKeeperCreep)
        }
        this.creepAct(srcKeeperCreeps, srcKeeperCreep)
    },

    creepWatch: function (spawn, srcKeeperCreeps, srcKeeperCreep) {
        if (srcKeeperCreeps.length < config_e16n54_respawn.maxActive.srcKeeperCreep.sourceOneKeeper) {
            srcKeeperCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (srcKeeperCreeps, srcKeeperCreep) {
        for (var creep in srcKeeperCreeps) {
            srcKeeperCreep.run(srcKeeperCreeps[creep])
        }
    },
}

module.exports = routines_e16n54_srcKeeperCreeps_sourceOneKeeper
