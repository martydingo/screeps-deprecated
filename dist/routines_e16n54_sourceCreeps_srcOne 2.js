const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e16n54_sourceCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        energySource = config_e16n54_sources.srcOne
        storage = '60668763c15bf6dea0a3288e'
        spawn = Game.spawns['E17N53SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(storage,energySource,room,[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,sourceCreeps,sourceCreep)
        }
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e16n54_respawn.maxActive.sourceCreep.srcOne) {
            sourceCreep.spawnCreep(spawn)
            }
    },

    
    creepAct: function(sourceCreeps,sourceCreep,spawn){
        for(creep in sourceCreeps){
                sourceCreep.run(sourceCreeps[creep])
            }
    }
}

module.exports = routines_e16n54_sourceCreeps_srcOne