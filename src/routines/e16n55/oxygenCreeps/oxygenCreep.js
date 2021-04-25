const config_e16n55_respawn = require("config_e16n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_oxygenCreep = require("classes_creeps_oxygenCreep")

var routines_e16n55_oxygenCreeps_srcOne = {

    run: function () {
        room = 'E16N55'
        spawn = Game.spawns['E17N56SPA1']
        oxygen = '5bbcb7b61e7d3f3cbe2509ed'
        oxygenStore = '6073eaedcea495164e18734a'

        oxygenCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "oxygenCreep" && creep.memory.creepRoom == "E16N55")
        //console.log(oxygenCreeps[0])
        oxygenCreep = new classes_creeps_oxygenCreep(oxygen,oxygenStore,room)
        
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,oxygenCreeps,oxygenCreep)
        }
        this.creepAct(oxygenCreeps,oxygenCreep)
        
    },
    
    creepWatch: function (spawn, oxygenCreeps,oxygenCreep) {
        if (oxygenCreeps.length < config_e16n55_respawn.maxActive.oxygenCreep) {
            oxygenCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(oxygenCreeps,oxygenCreep){
        for(creep in oxygenCreeps){
            oxygenCreep.run(oxygenCreeps[creep])
        }
    }
}

module.exports = routines_e16n55_oxygenCreeps_srcOne