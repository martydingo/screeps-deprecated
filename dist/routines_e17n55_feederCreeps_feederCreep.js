const config_e17n55_respawn = require("config_e17n55_respawn")
const config_e17n55_sources = require("config_e17n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e17n55_feederCreeps_feederCreep = {

    run: function () {
        room = 'E17N55'
        origin = '605f381c97b43e119d443878'
        energySource = config_e17n55_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d9'
        spawn = Game.spawns['E17N55SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "feederCreep" && creep.memory.creepRoom == "E17N55")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(origin,energySource,roomController,room)
        
        this.creepWatch(spawn,feederCreeps,feederCreep)
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e17n55_respawn.maxActive.feederCreep) {
            spawn.memory.spawnBlocked = 'feederCreep'
            feederCreep.spawnCreep(spawn)
        } else {
            if(spawn.memory.spawnBlocked){
                if(spawn.memory.spawnBlocked == 'feederCreep'){
                    delete spawn.memory.spawnBlocked
                }
            }
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e17n55_feederCreeps_feederCreep