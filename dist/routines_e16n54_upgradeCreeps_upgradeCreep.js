const config_e16n54_respawn = require("config_e16n54_respawn")
const config_e16n54_sources = require("config_e16n54_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e16n54_upgradeCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        energySource = config_e16n54_sources.srcOne
        roomController = '5bbcade89099fc012e6381e1'
        spawn = Game.spawns['E17N55SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E16N54")
        //console.log(upgradeCreeps[0])
        upgradeCreep = new classes_creeps_upgradeCreep(null,energySource,roomController,room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e16n54_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_upgradeCreeps_srcOne