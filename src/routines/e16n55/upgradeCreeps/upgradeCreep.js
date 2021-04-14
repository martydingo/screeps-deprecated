const config_e16n55_respawn = require("config_e16n55_respawn")
const config_e16n55_sources = require("config_e16n55_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e16n55_upgradeCreeps_srcOne = {

    run: function () {
        room = 'E16N55'
        energySource = config_e16n55_sources.srcOne
        roomController = '5bbcade89099fc012e6381e1'
        spawn = Game.spawns['E17N55SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E16N55")
        //console.log(upgradeCreeps[0])
        upgradeCreep = new classes_creeps_upgradeCreep(null,energySource,roomController,room)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e16n55_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e16n55_upgradeCreeps_srcOne