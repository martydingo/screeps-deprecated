const config_e17n53_respawn = require("config_e17n53_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_lootCreep = require("classes_creeps_lootCreep")

var routines_e17n53_lootCreeps_lootCreep = {

    run: function () {
        room = 'E17N53'
        spawn = Game.spawns['E17N53SPA1']
        lootCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "lootCreep" && creep.memory.creepRoom == room)
        //console.log(lootCreeps[0])
        lootCreep = new classes_creeps_lootCreep(room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,lootCreeps,lootCreep)
        }
        this.creepAct(lootCreeps,lootCreep)
        
    },
    
    creepWatch: function (spawn, lootCreeps,lootCreep) {
        if (lootCreeps.length < config_e17n53_respawn.maxActive.lootCreep) {
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
module.exports = routines_e17n53_lootCreeps_lootCreep