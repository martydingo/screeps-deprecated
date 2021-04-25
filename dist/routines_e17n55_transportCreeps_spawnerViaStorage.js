const config_e17n55_respawn = require("config_e17n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_transportCreep = require("classes_creeps_transportCreep")

var routines_e17n55_transportCreeps_spawnerViaStorage = {

    run: function () {
        room = 'E17N55'
        origin = '605f381c97b43e119d443878'
        destination = '605cd59d5ead6e1b5eb90b26'
        if(Game.spawns['E17N55SPA1'].spawning){spawn = Game.spawns['E17N55SPA2']} else {spawn = Game.spawns['E17N55SPA1']}
        transportCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "transportCreep" && creep.memory.creepRoom == "E17N55" && creep.memory.creepOrigin.id == origin && creep.memory.creepDestination.id == destination )
        //console.log(transportCreeps[0])
        transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY])
        
        this.creepWatch(spawn,transportCreeps,transportCreep)
        this.creepAct(transportCreeps,transportCreep)
        
    },
    
    creepWatch: function (spawn, transportCreeps,transportCreep) {
        if (transportCreeps.length < config_e17n55_respawn.maxActive.transportCreep.spawnerViaStorage) {
            spawn.memory.spawnBlocked = 'transportCreep_spawnerViaStorage'
            transportCreep.spawnCreep(spawn)
        } else {
            if(spawn.memory.spawnBlocked){
                if(spawn.memory.spawnBlocked == 'transportCreep_spawnerViaStorage'){
                    delete spawn.memory.spawnBlocked
                }
            }
        }
    },

    
    creepAct: function(transportCreeps,transportCreep){
        for(creep in transportCreeps){
            transportCreep.run(transportCreeps[creep])
        }
    }
}

module.exports = routines_e17n55_transportCreeps_spawnerViaStorage