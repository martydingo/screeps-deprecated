const config_e18n55_respawn = require("config_e18n55_respawn")
const config_e18n55_sources = require("config_e18n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_claimCreep = require("classes_creeps_claimCreep")

var routines_e18n55_claimCreeps_claimCreep = {

    run: function () {
        room = 'E18N55'
        reserveController = true
        spawn = Game.spawns['E17N55SPA1']
        targetRoomPos = new RoomPosition(25,25,'E18N55')
        claimCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "claimCreep" && creep.memory.creepRoom == room)
        //console.log(claimCreeps[0])
        claimCreep = new classes_creeps_claimCreep(room, targetRoomPos,reserveController)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,claimCreeps,claimCreep)
        }
        this.creepAct(claimCreeps,claimCreep)
        
    },
    
    creepWatch: function (spawn, claimCreeps,claimCreep) {
        if (claimCreeps.length < config_e18n55_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(claimCreeps,claimCreep){
        for(creep in claimCreeps){
            claimCreep.run(claimCreeps[creep])
        }
    }
}

module.exports = routines_e18n55_claimCreeps_claimCreep