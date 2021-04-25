const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e17n55_sources = require("config_e17n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_buildCreep = require("classes_creeps_buildCreep")

var routines_e16n54_buildCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        storage = '605f381c97b43e119d443878'
        energySource = config_e17n55_sources.srcTwo
        spawn = Game.spawns['E17N55SPA1']
        buildCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "buildCreep" && creep.memory.creepRoom == room)
        //console.log(buildCreeps[0])
        buildCreep = new classes_creeps_buildCreep(storage,energySource,room)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,buildCreeps,buildCreep)
        }
        this.creepAct(buildCreeps,buildCreep)
        
    },
    
    creepWatch: function (spawn, buildCreeps,buildCreep) {
        if (buildCreeps.length < config_e16n54_respawn.maxActive.buildCreep) {
            buildCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(buildCreeps,buildCreep){
        for(creep in buildCreeps){
                buildCreep.run(buildCreeps[creep])
        }
    }
}
module.exports = routines_e16n54_buildCreeps_srcOne