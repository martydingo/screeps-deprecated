const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e17n56_upgradeCreeps_upgradeCreep = {

    run: function () {
        storage = '6073eaedcea495164e18734a'
        room = 'E17N56'
        energySource = config_e17n56_sources.srcOne
        roomController = '5bbcade89099fc012e6381d6'
        spawn = Game.spawns['E17N56SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(upgradeCreeps[0])
        upgradeFromPOS = null
        upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,upgradeFromPOS,null,[WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,CARRY,CARRY,CARRY,MOVE])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e17n56_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_upgradeCreeps_upgradeCreep