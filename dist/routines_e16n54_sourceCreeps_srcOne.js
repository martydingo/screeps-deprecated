const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e16n54_sourceCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        energySource = config_e16n54_sources.srcOne
        storage = '605f381c97b43e119d443878'
        spawn = Game.spawns['E17N55SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(storage,energySource,room,[WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE,MOVE,MOVE])
        
        this.creepWatch(spawn,sourceCreeps,sourceCreep)
        this.creepAct(sourceCreeps,sourceCreep)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e16n54_respawn.maxActive.sourceCreep.srcOne) {
            sourceCreep.spawnCreep(spawn)
            }
    },

    
    creepAct: function(sourceCreeps,sourceCreep){
        for(creep in sourceCreeps){
            if(sourceCreeps[creep].memory.creepSource == energySource){
                sourceCreep.run(sourceCreeps[creep])
            }
        }
    }
}

module.exports = routines_e16n54_sourceCreeps_srcOne