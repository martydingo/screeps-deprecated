const config_e15n53_respawn = require("config_e15n53_respawn")
const config_e15n53_sources = require("config_e15n53_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e15n53_buildCreeps_srcOne = {

    run: function () {
        room = 'E15N53'
        storage = '60802877f9b1d6c57c1f2736'
        energySource = config_e15n53_sources.srcOne
        spawn = Game.spawns['E15N53SPA1']
        buildCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room,0,[WORK,WORK,WORK,MOVE,MOVE,MOVE,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,buildCreeps,buildCreep)
        }
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e15n53_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(buildCreeps,buildCreep){
        for(creep in buildCreeps){
                buildCreep.run(buildCreeps[creep])
        }
    }
}
module.exports = routines_e15n53_buildCreeps_srcOne