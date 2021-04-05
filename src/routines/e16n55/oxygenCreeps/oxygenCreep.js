const config_e16n54_respawn = require("config_e16n54_respawn")
const classes_creeps_oxygenCreep = require("classes_creeps_oxygenCreep")

var routines_e16n54_oxygenCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N55SPA1']
        oxygen = '5bbcb7b61e7d3f3cbe2509ed'
        oxygenStore = '6068f47e6d58935c351d5f15'

        oxygenCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "oxygenCreep" && creep.memory.creepRoom == "E16N54")
        //console.log(oxygenCreeps[0])
        oxygenCreep = new classes_creeps_oxygenCreep(oxygen,oxygenStore,room)
        
        
        this.creepWatch(spawn,oxygenCreeps,oxygenCreep)
        this.creepAct(oxygenCreeps,oxygenCreep)
        
    },
    
    creepWatch: function (spawn, oxygenCreeps,oxygenCreep) {
        if (oxygenCreeps.length < config_e16n54_respawn.maxActive.oxygenCreep) {
            oxygenCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(oxygenCreeps,oxygenCreep){
        for(creep in oxygenCreeps){
            oxygenCreep.run(oxygenCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_oxygenCreeps_srcOne