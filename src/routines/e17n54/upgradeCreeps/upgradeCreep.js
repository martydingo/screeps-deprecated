const config_e17n54_respawn = require("config_e17n54_respawn")
const config_e17n54_sources = require("config_e17n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e17n54_upgradeCreeps_srcOne = {

    run: function () {
        room = 'E17N54'
        energySource = config_e17n54_sources.srcOne
        roomController = '5bbcade89099fc012e6381e1'
        spawn = Game.spawns['E17N55SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E17N54")
        //console.log(upgradeCreeps[0])
        upgradeCreep = new classes_creeps_upgradeCreep(null,energySource,roomController,room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e17n54_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            if(upgradeCreeps[creep].ticksToLive < 400){
                upgradeCreeps[creep].memory.creepShouldRenew = true
            }
            if(upgradeCreeps[creep].ticksToLive > 1400){
                upgradeCreeps[creep].memory.creepShouldRenew = false
            }
            if(upgradeCreeps[creep].memory.creepShouldRenew) {
                if(upgradeCreeps[creep].memory.creepShouldRenew == false){
                    upgradeCreep.run(upgradeCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(upgradeCreeps[creep],spawn)
                }
            } else { 
                upgradeCreep.run(upgradeCreeps[creep])
            }
        }
    }
}

module.exports = routines_e17n54_upgradeCreeps_srcOne