const config_e17n56_respawn = require("config_e17n56_respawn")
const classes_creeps_transportCreep = require("classes_creeps_transportCreep")

var routines_e17n56_transportCreeps_spawnerViaStorage = {

    run: function () {
        room = 'E17N56'
        origin = '605f381c97b43e119d443878'
        destination = '605cd59d5ead6e1b5eb90b26'
        spawn = Game.spawns['E17N56SPA1']
        transportCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "transportCreep" && creep.memory.creepRoom == "E17N56" && creep.memory.creepOrigin.id == origin && creep.memory.creepDestination.id == destination )
        //console.log(transportCreeps[0])
        transportCreep = new classes_creeps_transportCreep(origin,destination,room,[MOVE,CARRY,MOVE,CARRY,MOVE,CARRY])
        
        this.creepWatch(spawn,transportCreeps,transportCreep)
        this.creepAct(transportCreeps,transportCreep)
        
    },
    
    creepWatch: function (spawn, transportCreeps,transportCreep) {
        if (transportCreeps.length < config_e17n56_respawn.maxActive.transportCreep.spawnerViaStorage) {
            transportCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(transportCreeps,transportCreep){
        for(creep in transportCreeps){
            transportCreep.run(transportCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_transportCreeps_spawnerViaStorage