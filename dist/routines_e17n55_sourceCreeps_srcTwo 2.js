const config_e17n55_respawn = require("config_e17n55_respawn")
const config_e17n55_sources = require("config_e17n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e17n55_sourceCreeps_srcTwo = {

    run: function () {
        room = 'E17N55'
        energySource = config_e17n55_sources.srcTwo
        spawn = Game.spawns['E17N55SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(null,energySource,room,[WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,sourceCreeps,sourceCreep)
        }
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e17n55_respawn.maxActive.sourceCreep.srcTwo) {
            sourceCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(sourceCreeps,sourceCreep,spawn){
        for(creep in sourceCreeps){
                sourceCreep.run(sourceCreeps[creep])
            }
    }
}

module.exports = routines_e17n55_sourceCreeps_srcTwo