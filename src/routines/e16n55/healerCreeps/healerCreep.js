const config_e16n55_respawn = require("config_e16n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_healerCreep = require("classes_creeps_healerCreep")

var routines_e16n55_healerCreeps_healerCreep = {

    run: function () {
        room = 'E16N55'
        spawn = Game.spawns['E17N55SPA1']
        healerCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "healerCreep" && creep.memory.creepRoom == this.roomName)
        //console.log(healerCreeps[0])
        healerCreep = new classes_creeps_healerCreep(room)
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,healerCreeps,healerCreep)
        }
        this.creepAct(healerCreeps,healerCreep)
        
    },
    
    creepWatch: function (spawn, healerCreeps,healerCreep) {
        if (healerCreeps.length < config_e16n55_respawn.maxActive.healerCreep) {
            healerCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(healerCreeps,healerCreep){
        for(creep in healerCreeps){
            healerCreep.run(healerCreeps[creep])
        }
    }
}

module.exports = routines_e16n55_healerCreeps_healerCreep