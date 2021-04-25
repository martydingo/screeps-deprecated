const config_e20n49_respawn = require("config_e20n49_respawn")
const config_e20n49_sources = require("config_e20n49_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_mistCreep = require("classes_creeps_mistCreep")

var routines_e20n49_mistCreeps_srcOne = {

    run: function () {
        room = 'E20N49'
        mistSource = config_e20n49_sources.srcOne
        storage = '60668763c15bf6dea0a3288e'
        spawn = Game.spawns['E17N53SPA1']
        mistCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "mistCreep" && creep.memory.creepSource == mistSource)
        //console.log(mistCreeps[0])
        mistCreep = new classes_creeps_mistCreep(storage,mistSource,room)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,mistCreeps,mistCreep)
        }
        this.creepAct(mistCreeps,mistCreep,spawn)
        
    },
    
    creepWatch: function (spawn, mistCreeps,mistCreep) {
        if (mistCreeps.length < config_e20n49_respawn.maxActive.mistCreep.srcOne) {
            mistCreep.spawnCreep(spawn)
        }
    },
    
    
    creepAct: function(mistCreeps,mistCreep,spawn){
        for(creep in mistCreeps){
                mistCreep.run(mistCreeps[creep])
            }
    }
}

module.exports = routines_e20n49_mistCreeps_srcOne