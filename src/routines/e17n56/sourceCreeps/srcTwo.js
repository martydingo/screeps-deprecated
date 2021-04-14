const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e17n56_sourceCreeps_srcTwo = {

    run: function () {
        room = 'E17N56'
        energySource = config_e17n56_sources.srcTwo
        spawn = Game.spawns['E17N56SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(null,energySource,room,[WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,sourceCreeps,sourceCreep)
        }
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e17n56_respawn.maxActive.sourceCreep.srcTwo) {
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

module.exports = routines_e17n56_sourceCreeps_srcTwo