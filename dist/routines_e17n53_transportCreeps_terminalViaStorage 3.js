const config_e17n53_respawn = require("config_e17n53_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_transportCreep = require("classes_creeps_transportCreep")

var routines_e17n53_transportCreeps_terminalViaStorage = {

    run: function () {
        room = 'E17N53'
        origin = '60668763c15bf6dea0a3288e'
        destination = '6071a510015f30575a4c36c5'
        spawn = Game.spawns['E17N53SPA1']
        transportCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "transportCreep" && creep.memory.creepRoom == "E17N53" && creep.memory.creepOrigin.id == origin && creep.memory.creepDestination.id == destination )
        remoteLimit = '2000'
        //console.log(transportCreeps[0])
        transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,MOVE,CARRY,MOVE,CARRY],RESOURCE_ENERGY,remoteLimit)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,transportCreeps,transportCreep)
        }
        this.creepAct(transportCreeps,transportCreep)
        
    },
    
    creepWatch: function (spawn, transportCreeps,transportCreep) {
        if (transportCreeps.length < config_e17n53_respawn.maxActive.transportCreep.terminalViaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(transportCreeps,transportCreep){
        for(creep in transportCreeps){
            transportCreep.run(transportCreeps[creep])
        }
    }
}

module.exports = routines_e17n53_transportCreeps_terminalViaStorage