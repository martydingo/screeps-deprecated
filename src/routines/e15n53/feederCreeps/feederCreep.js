config_e15n53_respawn = require("config_e15n53_respawn")
config_e15n53_sources = require("config_e15n53_sources")
classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e15n53_feederCreeps_feederCreep = {

    run: function () {
        room = 'E15N53'
        origin = '60802877f9b1d6c57c1f2736'
        energySource = config_e15n53_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d9'
        spawn = Game.spawns['E15N53SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "feederCreep" && creep.memory.creepRoom == "E15N53")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(origin,energySource,roomController,room,[MOVE,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,feederCreeps,feederCreep)
        }
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e15n53_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e15n53_feederCreeps_feederCreep