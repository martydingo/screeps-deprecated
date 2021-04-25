const config_e18n55_respawn = require("config_e18n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_warriorCreep = require("classes_creeps_warriorCreep")

var routines_e18n55_warriorCreeps_warriorCreep = {

    run: function () {
        room = 'E18N55'
        spawn = Game.spawns['E17N55SPA1']
        warriorCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "warriorCreep" && creep.memory.creepRoom == room)
        //console.log(warriorCreeps[0])
        warriorCreep = new classes_creeps_warriorCreep(room, [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE])
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,warriorCreeps,warriorCreep)
        }
        this.creepAct(warriorCreeps,warriorCreep)
        
    },
    
    creepWatch: function (spawn, warriorCreeps,warriorCreep) {
        if (warriorCreeps.length < config_e18n55_respawn.maxActive.warriorCreep) {
            warriorCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(warriorCreeps,warriorCreep){
        for(creep in warriorCreeps){
            warriorCreep.run(warriorCreeps[creep])
        }
    }
}

module.exports = routines_e18n55_warriorCreeps_warriorCreep