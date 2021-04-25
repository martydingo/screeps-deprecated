const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_claimCreep = require("classes_creeps_claimCreep")

var routines_e16n54_claimCreeps_claimCreep = {

    run: function () {
        room = 'E16N54'
        reserveController = true
        spawn = Game.spawns['E17N55SPA1']
        targetRoomPos = new RoomPosition(25,25,'E16N54')
        claimCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "claimCreep")
        //console.log(claimCreeps[0])
        claimCreep = new classes_creeps_claimCreep(room, targetRoomPos,reserveController)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,claimCreeps,claimCreep)
        }
        this.creepAct(claimCreeps,claimCreep)
        
    },
    
    creepWatch: function (spawn, claimCreeps,claimCreep) {
        if (claimCreeps.length < config_e16n54_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(claimCreeps,claimCreep){
        for(creep in claimCreeps){
            claimCreep.run(claimCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_claimCreeps_claimCreep