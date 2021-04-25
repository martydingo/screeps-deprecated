const config_e17n56_respawn = require("config_e17n56_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_transportCreep = require("classes_creeps_transportCreep")

var routines_e17n56_transportCreeps_upgradeContainerviaStorage = {

    run: function () {
        room = 'E17N56'
        origin = '6073eaedcea495164e18734a'
        destination = '607adf9af2a970d033902c00'
        spawn = Game.spawns['E17N56SPA1']
        transportCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "transportCreep" && creep.memory.creepRoom == "E17N56" && creep.memory.creepOrigin.id == origin && creep.memory.creepDestination.id == destination )
        //console.log(transportCreeps[0])
        transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,transportCreeps,transportCreep)
        }
        this.creepAct(transportCreeps,transportCreep)
        
    },
    
    creepWatch: function (spawn, transportCreeps,transportCreep) {
        if (transportCreeps.length < config_e17n56_respawn.maxActive.transportCreep.upgradeContainerviaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(transportCreeps,transportCreep){
        for(creep in transportCreeps){
            transportCreep.run(transportCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_transportCreeps_upgradeContainerviaStorage