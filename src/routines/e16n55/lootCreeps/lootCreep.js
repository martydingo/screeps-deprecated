const config_e16n55_respawn = require("config_e16n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_lootCreep = require("classes_creeps_lootCreep")

var routines_e16n55_lootCreeps_lootCreep = {

    run: function () {
        room = 'E16N55'
        spawn = Game.spawns['E17N53SPA1']
        storage = '605f381c97b43e119d443878'
        lootCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "lootCreep" && creep.memory.creepRoom == room)
        //console.log(lootCreeps[0])
        lootCreep = new classes_creeps_lootCreep(room, storage)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,lootCreeps,lootCreep)
        }
        this.creepAct(lootCreeps,lootCreep)
        
    },
    
    creepWatch: function (spawn, lootCreeps,lootCreep) {
        if (lootCreeps.length < config_e16n55_respawn.maxActive.lootCreep) {
            lootCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(lootCreeps,lootCreep){
        for(creep in lootCreeps){
            if(lootCreeps[creep].ticksToLive < 400){
                lootCreeps[creep].memory.creepShouldRenew = true
            }
            if(lootCreeps[creep].ticksToLive > 1400){
                lootCreeps[creep].memory.creepShouldRenew = false
            }
            if(lootCreeps[creep].memory.creepShouldRenew) {
                if(lootCreeps[creep].memory.creepShouldRenew == false){
                    lootCreep.run(lootCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(lootCreeps[creep],spawn)
                }
            } else { 
                lootCreep.run(lootCreeps[creep])
            }
        }
    }
}
module.exports = routines_e16n55_lootCreeps_lootCreep