const config_e15n53_respawn = require("config_e15n53_respawn")
const config_e15n53_sources = require("config_e15n53_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e15n53_sourceCreeps_srcOne = {

    run: function () {
        room = 'E15N53'
        energySource = config_e15n53_sources.srcOne
        storage = '60802877f9b1d6c57c1f2736'
        spawn = Game.spawns['E15N53SPA1']
        sourceCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(storage,energySource,room,[WORK,WORK,WORK,WORK,MOVE,CARRY])
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,sourceCreeps,sourceCreep)
        }
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e15n53_respawn.maxActive.sourceCreep.srcOne) {
            sourceCreep.spawnCreep(spawn)
        }
    },
    
    
    creepAct: function(sourceCreeps,sourceCreep,spawn){
        for(creep in sourceCreeps){
                sourceCreep.run(sourceCreeps[creep])
            }
    }
}

module.exports = routines_e15n53_sourceCreeps_srcOne