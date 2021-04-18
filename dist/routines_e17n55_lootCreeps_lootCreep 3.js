const config_e17n55_respawn = require("config_e17n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_lootCreep = require("classes_creeps_lootCreep")

var routines_e17n55_lootCreeps_lootCreep = {

    run: function () {
        room = 'E17N55'
        spawn = Game.spawns['E17N55SPA1']
        lootCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "lootCreep" && creep.memory.creepRoom == room)
        //console.log(lootCreeps[0])
        lootCreep = new classes_creeps_lootCreep(room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,lootCreeps,lootCreep)
        }
        this.creepAct(lootCreeps,lootCreep)
        
    },
    
    creepWatch: function (spawn, lootCreeps,lootCreep) {
        if (lootCreeps.length < config_e17n55_respawn.maxActive.lootCreep) {
            lootCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(lootCreeps,lootCreep){
        for(creep in lootCreeps){
            lootCreep.run(lootCreeps[creep])
        }
    }
}
module.exports = routines_e17n55_lootCreeps_lootCreep