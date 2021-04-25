const config_e17n54_respawn = require("config_e17n54_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_warriorCreep = require("classes_creeps_warriorCreep")

var routines_e17n54_warriorCreeps_warriorCreep = {

    run: function () {
        room = 'E17N54'
        spawn = Game.spawns['E17N55SPA1']
        warriorCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "warriorCreep" && creep.memory.creepRoom == room)
        //console.log(warriorCreeps[0])
        //        warriorCreep = new classes_creeps_warriorCreep(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        warriorCreep = new classes_creeps_warriorCreep(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,warriorCreeps,warriorCreep)
        }
        this.creepAct(warriorCreeps,warriorCreep)
        
    },
    
    creepWatch: function (spawn, warriorCreeps,warriorCreep) {
        if (warriorCreeps.length < config_e17n54_respawn.maxActive.warriorCreep) {
            warriorCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(warriorCreeps,warriorCreep){
        for(creep in warriorCreeps){
            warriorCreep.run(warriorCreeps[creep])
        }
    }
}

module.exports = routines_e17n54_warriorCreeps_warriorCreep