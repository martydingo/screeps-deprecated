const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e17n56_upgradeCreeps_upgradeCreep2 = {

    run: function () {
        storage = '606b050239c8c35403a0b080'
        room = 'E17N56'
        energySource = config_e17n56_sources.srcOne
        roomController = '5bbcade89099fc012e6381d6'
        spawn = Game.spawns['E17N56SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(upgradeCreeps[0])
        upgradeFromPOS = null
        upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,upgradeFromPOS,'606b050239c8c35403a0b080',[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        console.log(config_e17n56_respawn.maxActive.upgradeCreep2)

        if (upgradeCreeps.length < config_e17n56_respawn.maxActive.upgradeCreep2) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_upgradeCreeps_upgradeCreep2