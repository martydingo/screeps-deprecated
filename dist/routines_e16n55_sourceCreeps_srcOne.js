const config_e16n55_respawn = require("config_e16n55_respawn")
const config_e16n55_sources = require("config_e16n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_sourceCreep = require("classes_creeps_sourceCreep")

var routines_e16n55_sourceCreeps_srcOne = {

    run: function () {
        room = 'E16N55'
        energySource = config_e16n55_sources.srcOne
        storage = '60847dae416684815d3ef661'
        if(Game.spawns['E17N55SPA2'].spawning){spawn = Game.spawns['E17N55SPA2']} else {spawn = Game.spawns['E17N55SPA1']}
        sourceCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "sourceCreep" && creep.memory.creepSource == energySource)
        //console.log(sourceCreeps[0])
        sourceCreep = new classes_creeps_sourceCreep(storage,energySource,room,[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY])
        
        this.creepWatch(spawn,sourceCreeps,sourceCreep)
        this.creepAct(sourceCreeps,sourceCreep,spawn)
        
    },
    
    creepWatch: function (spawn, sourceCreeps,sourceCreep) {
        if (sourceCreeps.length < config_e16n55_respawn.maxActive.sourceCreep.srcOne) {
            sourceCreep.spawnCreep(spawn)
            }
    },

    
    creepAct: function(sourceCreeps,sourceCreep,spawn){
        for(creep in sourceCreeps){
                sourceCreep.run(sourceCreeps[creep])
            }
    }
}

module.exports = routines_e16n55_sourceCreeps_srcOne