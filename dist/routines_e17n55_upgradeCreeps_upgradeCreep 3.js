const config_e17n55_respawn = require("config_e17n55_respawn")
const config_e17n55_sources = require("config_e17n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e17n55_upgradeCreeps_srcOne = {

    run: function () {
        storage = '605f381c97b43e119d443878'
        room = 'E17N55'
        energySource = config_e17n55_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d9'
        spawn = Game.spawns['E17N55SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E17N55")
        //console.log(upgradeCreeps[0])
        upgradeFromPOS = new RoomPosition(6, 41, 'E17N55')
        upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,upgradeFromPOS)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e17n55_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e17n55_upgradeCreeps_srcOne