const config_e16n54_respawn = require("config_e16n54_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_utriumCreep = require("classes_creeps_utriumCreep")

var routines_e16n54_utriumCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N55SPA1']
        utrium = '5bbcb7b61e7d3f3cbe2509ef'
        utriumStore = '60673c5129245f65a5d6fa3d'
        keeperLair = '5bbcaddb9099fc012e637fa9'
        holdingPos = new RoomPosition(46, 17, 'E16N54')

        utriumCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "utriumCreep")
        //console.log(utriumCreeps[0])
        utriumCreep = new classes_creeps_utriumCreep(utrium,utriumStore,room,holdingPos,keeperLair)
        
        
        if(!spawn.memory.spawnBlocked){
            if(_.filter(Game.creeps, creep => creep.memory.creepClass == "srcKeeperCreep" && creep.memory.creepRoom == room).length > 0){
                this.creepWatch(spawn,utriumCreeps,utriumCreep)
            }
        }
        this.creepAct(utriumCreeps,utriumCreep,spawn)
        
    },
    
    creepWatch: function (spawn, utriumCreeps,utriumCreep) {
        if (utriumCreeps.length < config_e16n54_respawn.maxActive.utriumCreep) {
            utriumCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(utriumCreeps,utriumCreep,spawn){
        for(creep in utriumCreeps){
            if(utriumCreeps[creep].ticksToLive < 400){
                utriumCreeps[creep].memory.creepShouldRenew = true
            }
            if(utriumCreeps[creep].ticksToLive > 1400){
                utriumCreeps[creep].memory.creepShouldRenew = false
            }
            if(utriumCreeps[creep].memory.creepShouldRenew) {
                if(utriumCreeps[creep].memory.creepShouldRenew == false){
                    utriumCreep.run(utriumCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(utriumCreeps[creep],spawn)
                }
            } else { 
                utriumCreep.run(utriumCreeps[creep])
            }
        }
    }
}

module.exports = routines_e16n54_utriumCreeps_srcOne