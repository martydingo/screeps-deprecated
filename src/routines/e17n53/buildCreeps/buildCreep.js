const config_e17n53_respawn = require("config_e17n53_respawn")
const config_e17n53_sources = require("config_e17n53_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e17n53_buildCreeps_srcOne = {

    run: function () {
        room = 'E17N53'
        energySource = config_e17n53_sources.srcOne
        spawn = Game.spawns['E17N53SPA1']
        buildCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        storage = '60668763c15bf6dea0a3288e'
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room,null,[WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,buildCreeps,buildCreep)
        }
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e17n53_respawn.maxActive.buildCreep) {
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
module.exports = routines_e17n53_buildCreeps_srcOne