const config_e17n56_respawn = require("config_e17n56_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_scoutCreep = require("classes_creeps_scoutCreep")

var routines_e17n56_scoutCreeps_scoutCreep = {

    run: function () {
        room = 'E17N56'
        spawn = Game.spawns['E17N55SPA1']
        targetPos = new RoomPosition(25,25,room)
        scoutCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "scoutCreep" && creep.memory.creepRoom == room )
        //console.log(scoutCreeps[0])
        scoutCreep = new classes_creeps_scoutCreep(room,[MOVE],targetPos)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,scoutCreeps,scoutCreep)
        }
        this.creepAct(scoutCreeps,scoutCreep)
        
    },
    
    creepWatch: function (spawn, scoutCreeps,scoutCreep) {
        if (scoutCreeps.length < config_e17n56_respawn.maxActive.scoutCreep) {
            scoutCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(scoutCreeps,scoutCreep){
        for(creep in scoutCreeps){
            if(scoutCreeps[creep].memory.creepRoom == room){
                scoutCreep.run(scoutCreeps[creep])
            }
        }
    }
}

module.exports = routines_e17n56_scoutCreeps_scoutCreep