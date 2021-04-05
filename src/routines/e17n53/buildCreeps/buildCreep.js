const config_e17n53_respawn = require("config_e17n53_respawn")
const config_e17n53_sources = require("config_e17n53_sources")
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e17n53_buildCreeps_srcOne = {

    run: function () {
        room = 'E17N53'
        energySource = config_e17n53_sources.srcOne
        spawn = Game.spawns['E17N53SPA1']
        buildCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        storage = '60668763c15bf6dea0a3288e'
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room,null,[WORK,MOVE,CARRY,WORK,MOVE,CARRY,WORK,MOVE,CARRY,WORK,MOVE,CARRY])
        
        this.creepWatch(spawn,buildCreeps,buildCreep)
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e17n53_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(buildCreeps,buildCreep){
        for(creep in buildCreeps){
            buildCreep.run(buildCreeps[creep])
        }
    }
}

module.exports = routines_e17n53_buildCreeps_srcOne