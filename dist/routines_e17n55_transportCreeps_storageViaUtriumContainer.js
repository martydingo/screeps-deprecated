const config_e17n55_respawn = require("config_e17n55_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_transportCreep = require("classes_creeps_transportCreep")

var routines_e17n55_transportCreeps_storageViaUtriumContainer = {

    run: function () {
        room = 'E17N55'
        origin = '6068f47e6d58935c351d5f15'
        destination = '605f381c97b43e119d443878'
        if(Game.spawns['E17N55SPA1'].spawning){spawn = Game.spawns['E17N55SPA2']} else {spawn = Game.spawns['E17N55SPA1']}
        transportCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "transportCreep" && creep.memory.creepRoom == "E17N55" && creep.memory.creepOrigin.id == origin && creep.memory.creepDestination.id == destination )
        //console.log(transportCreeps[0])
        transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,CARRY,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,transportCreeps,transportCreep)
        }
        this.creepAct(transportCreeps,transportCreep)
        
    },
    
    creepWatch: function (spawn, transportCreeps,transportCreep) {
        if (transportCreeps.length < config_e17n55_respawn.maxActive.transportCreep.storageViaUtriumContainer) {
            transportCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(transportCreeps,transportCreep){
        for(creep in transportCreeps){
            transportCreep.run(transportCreeps[creep])
        }
    }
}

module.exports = routines_e17n55_transportCreeps_storageViaUtriumContainer