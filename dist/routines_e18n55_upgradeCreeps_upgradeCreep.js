const config_e18n55_respawn = require("config_e18n55_respawn")
const config_e18n55_sources = require("config_e18n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e18n55_upgradeCreeps_srcOne = {

    run: function () {
        room = 'E18N55'
        energySource = config_e18n55_sources.srcOne
        roomController = '5bbcade89099fc012e6381e1'
        spawn = Game.spawns['E17N55SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E18N55")
        //console.log(upgradeCreeps[0])
        upgradeCreep = new classes_creeps_upgradeCreep(null,energySource,roomController,room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e18n55_respawn.maxActive.upgradeCreep) {
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

module.exports = routines_e18n55_upgradeCreeps_srcOne