const config_e17n53_respawn = require("config_e17n53_respawn")
const config_e17n53_sources = require("config_e17n53_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_claimCreep = require("classes_creeps_claimCreep")

var routines_e17n53_claimCreeps_claimCreep = {

    run: function () {
        room = 'E17N53'
        energySource = config_e17n53_sources.srcOne
        roomController = '5bbcade89099fc012e6381e1'
        spawn = Game.spawns['E17N55SPA1']
        targetRoomPos = new RoomPosition(25,25,'E17N53')
        claimCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "claimCreep")
        //console.log(claimCreeps[0])
        claimCreep = new classes_creeps_claimCreep(room, targetRoomPos)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,claimCreeps,claimCreep)
        }
        this.creepAct(claimCreeps,claimCreep)
        
    },
    
    creepWatch: function (spawn, claimCreeps,claimCreep) {
        if (claimCreeps.length < config_e17n53_respawn.maxActive.claimCreep) {
            claimCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(claimCreeps,claimCreep){
        for(creep in claimCreeps){
            claimCreep.run(claimCreeps[creep])
        }
    }
}

module.exports = routines_e17n53_claimCreeps_claimCreep