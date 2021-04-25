const config_e16n55_respawn = require("config_e16n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_lootCreep = require("classes_creeps_lootCreep")

var routines_e16n55_lootCreeps_lootCreep = {

    run: function () {
        room = 'E16N55'
        spawn = Game.spawns['E17N55SPA1']
        storage = '60847dae416684815d3ef661'
        lootCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "lootCreep" && creep.memory.creepRoom == room)
        //console.log(lootCreeps[0])
        lootCreep = new classes_creeps_lootCreep(room, storage)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,lootCreeps,lootCreep)
        }
        this.creepAct(lootCreeps,lootCreep)
        
    },
    
    creepWatch: function (spawn, lootCreeps,lootCreep) {
        if (lootCreeps.length < config_e16n55_respawn.maxActive.lootCreep) {
            lootCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(lootCreeps,lootCreep){
        for(creep in lootCreeps){
            lootCreep.run(lootCreeps[creep])
        }
    }
}
module.exports = routines_e16n55_lootCreeps_lootCreep