const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e16n54_feederCreeps_feederCreep = {

    run: function () {
        room = 'E16N54'
        energySource = config_e16n54_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d9'
        spawn = Game.spawns['E17N55SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "feederCreep")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(energySource,roomController,room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,feederCreeps,feederCreep)
        }
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e16n54_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_feederCreeps_feederCreep