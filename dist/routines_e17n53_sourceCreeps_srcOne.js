const config_e17n53_respawn = require("config_e17n53_respawn")
const config_e17n53_sources = require("config_e17n53_sources")
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e17n53_sourceCreeps_srcOne = {

    run: function () {
        room = 'E17N53'
        energySource = config_e17n53_sources.srcOne
        spawn = Game.spawns['E17N53SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(null,energySource,room,[WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY])
        this.creepWatch(spawn,sourceCreeps,sourceCreep)
        this.creepAct(sourceCreeps,sourceCreep)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e17n53_respawn.maxActive.sourceCreep.srcOne) {
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

module.exports = routines_e17n53_sourceCreeps_srcOne