const config_e15n53_respawn = require("config_e15n53_respawn")
const config_e15n53_sources = require("config_e15n53_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e15n53_upgradeCreeps_srcOne = {

    run: function () {
        storage = '60802877f9b1d6c57c1f2736'
        room = 'E15N53'
        energySource = config_e15n53_sources.srcOne
        roomController = '5bbcadc89099fc012e637d8e'
        spawn = Game.spawns['E15N53SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E15N53")
        //console.log(upgradeCreeps[0])
        upgradeFromPOS = null
        upgradeCreep = new classes_creeps_upgradeCreep(storage,energySource,roomController,room,upgradeFromPOS,'60802877f9b1d6c57c1f2736',[WORK,MOVE,CARRY,CARRY,MOVE])
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
        }
        this.creepAct(upgradeCreeps,upgradeCreep)
        
    },
    
    creepWatch: function (spawn, upgradeCreeps,upgradeCreep) {
        if (upgradeCreeps.length < config_e15n53_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(upgradeCreeps,upgradeCreep){
        for(creep in upgradeCreeps){
            upgradeCreep.run(upgradeCreeps[creep])
        }
    }
}

module.exports = routines_e15n53_upgradeCreeps_srcOne