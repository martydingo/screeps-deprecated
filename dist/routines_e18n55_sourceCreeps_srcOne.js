const config_e18n55_respawn = require("config_e18n55_respawn")
const config_e18n55_sources = require("config_e18n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e18n55_sourceCreeps_srcOne = {

    run: function () {
        room = 'E18N55'
        energySource = config_e18n55_sources.srcOne
        storage = '605f381c97b43e119d443878'
        spawn = Game.spawns['E17N55SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(storage,energySource,room,[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,sourceCreeps,sourceCreep)
        }
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e18n55_respawn.maxActive.sourceCreep.srcOne) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(sourceCreeps,sourceCreep,spawn){
        for(creep in sourceCreeps){
            if(sourceCreeps[creep].ticksToLive < 400){
                sourceCreeps[creep].memory.creepShouldRenew = true
            }
            if(sourceCreeps[creep].ticksToLive > 1400){
                sourceCreeps[creep].memory.creepShouldRenew = false
            }
            if(sourceCreeps[creep].memory.creepShouldRenew) {
                if(sourceCreeps[creep].memory.creepShouldRenew == false){
                    sourceCreep.run(sourceCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(sourceCreeps[creep],spawn)
                }
            } else { 
                sourceCreep.run(sourceCreeps[creep])
            }
        }
    }
}

module.exports = routines_e18n55_sourceCreeps_srcOne