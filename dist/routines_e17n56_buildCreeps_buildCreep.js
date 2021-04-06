const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e17n56_buildCreeps_srcOne = {

    run: function () {
        room = 'E17N56'
        energySource = config_e17n56_sources.srcOne
        spawn = Game.spawns['E17N56SPA1']
        storage = '60685f6d0db288d32283c306'
        buildCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room,500,[WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,CARRY])
        
        this.creepWatch(spawn,buildCreeps,buildCreep)
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e17n56_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(buildCreeps,buildCreep){
        for(creep in buildCreeps){
            buildCreep.run(buildCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_buildCreeps_srcOne