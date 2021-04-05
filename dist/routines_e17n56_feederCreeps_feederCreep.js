const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e17n56_feederCreeps_feederCreep = {

    run: function () {
        room = 'E17N56'
        origin = '60685f6d0db288d32283c306'
        energySource = config_e17n56_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d6'
        spawn = Game.spawns['E17N56SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "feederCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(origin,energySource,roomController,room)
        
        this.creepWatch(spawn,feederCreeps,feederCreep)
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e17n56_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_feederCreeps_feederCreep