const config_e16n54_respawn = require("config_e16n54_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceOneKeeper = require("classes_creeps_srcKeeperCreep")

var routines_e16n54_srcKeeperCreeps_sourceOneKeeper = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N53SPA1']
        campPos = new RoomPosition(37, 9, room)
        lab = '606a0fa296af2a502a7be7c7'
        srcKeeperCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "srcKeeperCreep" && creep.memory.creepRoom == room && creep.memory.creepRoom == room && creep.memory.creepCampPos.x == campPos.x && creep.memory.creepCampPos.y == campPos.y)
        //console.log(srcKeeperCreeps[0])
        //        srcKeeperCreep = new classes_creeps_sourceOneKeeper(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        srcKeeperCreep = new classes_creeps_sourceOneKeeper(room, campPos, lab)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,srcKeeperCreeps,srcKeeperCreep)
        }
        this.creepAct(srcKeeperCreeps,srcKeeperCreep)
        
    },
    
    creepWatch: function (spawn, srcKeeperCreeps,srcKeeperCreep) {
        if (srcKeeperCreeps.length < config_e16n54_respawn.maxActive.srcKeeperCreep.sourceOneKeeper) {
            srcKeeperCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(srcKeeperCreeps,srcKeeperCreep){
        for(creep in srcKeeperCreeps){
            srcKeeperCreep.run(srcKeeperCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_srcKeeperCreeps_sourceOneKeeper