const config_e17n54_respawn = require("config_e17n54_respawn")
const config_e17n54_sources = require("config_e17n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e17n54_buildCreeps_buildCreep = {

    run: function () {
        room = 'E17N54'
        storage = '605f381c97b43e119d443878'
        energySource = config_e17n54_sources.srcOne
        spawn = Game.spawns['E17N55SPA1']
        buildCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room,5000,['WORK','WORK','MOVE','CARRY'])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,buildCreeps,buildCreep)
        }
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e17n54_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(buildCreeps,buildCreep){
        for(creep in buildCreeps){
            if(buildCreeps[creep].ticksToLive < 400){
                buildCreeps[creep].memory.creepShouldRenew = true
            }
            if(buildCreeps[creep].ticksToLive > 1400){
                buildCreeps[creep].memory.creepShouldRenew = false
            }
            if(buildCreeps[creep].memory.creepShouldRenew) {
                if(buildCreeps[creep].memory.creepShouldRenew == false){
                    buildCreep.run(buildCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(buildCreeps[creep],spawn)
                }
            } else { 
                buildCreep.run(buildCreeps[creep])
            }
        }
    }
}
module.exports = routines_e17n54_buildCreeps_buildCreep