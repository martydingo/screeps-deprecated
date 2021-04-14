config_e17n52_respawn = require("config_e17n52_respawn")
config_e17n52_sources = require("config_e17n52_sources")
classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e17n52_feederCreeps_feederCreep = {

    run: function () {
        room = 'E17N52'
        origin = '60668763c15bf6dea0a3288e'
        energySource = config_e17n52_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d9'
        spawn = Game.spawns['E17N52SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "feederCreep" && creep.memory.creepRoom == "E17N52")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(origin,energySource,roomController,room,[MOVE,CARRY,MOVE,CARRY,MOVE,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,feederCreeps,feederCreep)
        }
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e17n52_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e17n52_feederCreeps_feederCreep