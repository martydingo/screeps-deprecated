const config_e16n54_respawn = require("config_e16n54_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_utriumKeeper = require("classes_creeps_srcKeeperCreep")

var routines_e16n54_srcKeeperCreeps_utriumKeeper = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N55SPA1']
        campPos = new RoomPosition(43, 34, room)
        secondLair = '5bbcaddb9099fc012e637fa4'
        lab = '606a0fa296af2a502a7be7c7'
        srcKeeperCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "srcKeeperCreep" && creep.memory.creepRoom == room && creep.memory.creepCampPos.x == campPos.x && creep.memory.creepCampPos.y == campPos.y)
        //console.log(srcKeeperCreeps[0])
        //        srcKeeperCreep = new classes_creeps_utriumKeeper(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        srcKeeperCreep = new classes_creeps_utriumKeeper(room, campPos, lab, secondLair)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,srcKeeperCreeps,srcKeeperCreep)
        }
        this.creepAct(srcKeeperCreeps,srcKeeperCreep,spawn)
        
    },
    
    creepWatch: function (spawn, srcKeeperCreeps,srcKeeperCreep) {
        if (srcKeeperCreeps.length < config_e16n54_respawn.maxActive.srcKeeperCreep.utriumKeeper) {
            srcKeeperCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(srcKeeperCreeps,srcKeeperCreep,spawn){
        for(creep in srcKeeperCreeps){
            if(srcKeeperCreeps[creep].ticksToLive < 400 && srcKeeperCreeps[creep].pos.findInRange(FIND_HOSTILE_CREEPS, 1).length < 1) {
                srcKeeperCreeps[creep].memory.creepShouldRenew = true
            }
            if(srcKeeperCreeps[creep].ticksToLive > 1400){
                srcKeeperCreeps[creep].memory.creepShouldRenew = false
            }
            if(srcKeeperCreeps[creep].memory.creepShouldRenew) {
                if(srcKeeperCreeps[creep].memory.creepShouldRenew == false){
                    srcKeeperCreep.run(srcKeeperCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(srcKeeperCreeps[creep],spawn)
                }
            } else { 
                srcKeeperCreep.run(srcKeeperCreeps[creep])
            }
        }
    }
}

module.exports = routines_e16n54_srcKeeperCreeps_utriumKeeper