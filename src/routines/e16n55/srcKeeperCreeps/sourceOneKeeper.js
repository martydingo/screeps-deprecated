const config_e16n55_respawn = require('config_e16n55_respawn')
const classes_creeps_sourceOneKeeper = require('classes_creeps_srcKeeperCreep')

var routines_e16n55_srcKeeperCreeps_sourceOneKeeper = {
    run: function () {
        const room = 'E16N55'
        const spawn = Game.spawns['E17N55SPA1']
        const campPos = new RoomPosition(36, 37, room)
        const secondLair = null // '5bbcadda9099fc012e637fa1'
        const lab = '606a0fa296af2a502a7be7c7'
        var srcKeeperCreeps = _.filter(
            Game.creeps,
            (creep) =>
                creep.memory.creepClass == 'srcKeeperCreep' &&
                creep.memory.creepRoom == room &&
                creep.memory.creepCampPos.x == campPos.x &&
                creep.memory.creepCampPos.y == campPos.y
        )

        //        var srcKeeperCreep = new classes_creeps_sourceOneKeeper(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        var srcKeeperCreep = new classes_creeps_sourceOneKeeper(
            room,
            campPos,
            lab,
            secondLair
        )
        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, srcKeeperCreeps, srcKeeperCreep)
        }
        this.creepAct(srcKeeperCreeps, srcKeeperCreep, spawn)
    },

    creepWatch: function (spawn, srcKeeperCreeps, srcKeeperCreep) {
        if (
            srcKeeperCreeps.length <
            config_e16n55_respawn.maxActive.srcKeeperCreep.sourceOneKeeper
        ) {
            srcKeeperCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (srcKeeperCreeps, srcKeeperCreep, spawn) {
        for (var creep in srcKeeperCreeps) {
            if (
                srcKeeperCreeps[creep].ticksToLive < 200 &&
                srcKeeperCreeps[creep].pos.findInRange(FIND_HOSTILE_CREEPS, 1)
                    .length < 1
            ) {
                srcKeeperCreeps[creep].memory.creepShouldRenew = true
            }
            if (srcKeeperCreeps[creep].ticksToLive > 1400) {
                srcKeeperCreeps[creep].memory.creepShouldRenew = false
            }
            if (srcKeeperCreeps[creep].memory.creepShouldRenew) {
                if (srcKeeperCreeps[creep].memory.creepShouldRenew == false) {
                    srcKeeperCreep.run(srcKeeperCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(srcKeeperCreeps[creep], spawn)
                }
            } else {
                srcKeeperCreep.run(srcKeeperCreeps[creep])
            }
        }
    },
}

module.exports = routines_e16n55_srcKeeperCreeps_sourceOneKeeper
