const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_snipeCreep = require("classes_creeps_snipeCreep")

var routines_e16n54_snipeCreeps_snipeCreep = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N55SPA1']
        snipePos = new RoomPosition(37,41,room)
        snipeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "snipeCreep")
        //console.log(snipeCreeps[0])
        snipeCreep = new classes_creeps_snipeCreep(snipePos,room)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,snipeCreeps,snipeCreep)
        }
        this.creepAct(snipeCreeps,snipeCreep)
        
    },
    
    creepWatch: function (spawn, snipeCreeps,snipeCreep) {
        if (snipeCreeps.length < config_e16n54_respawn.maxActive.snipeCreep) {
            snipeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(snipeCreeps,snipeCreep){
        for(creep in snipeCreeps){
            snipeCreep.run(snipeCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_snipeCreeps_snipeCreep