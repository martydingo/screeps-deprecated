const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const classes_creeps_upgradeCreep = require("classes_creeps_upgradeCreep")

var routines_e17n56_upgradeCreeps_upgradeCreep = {

    run: function () {
        storage = '606c48d066615425298712d3'
        room = 'E17N56'
        energySource = config_e17n56_sources.srcTwo
        roomController = '5bbcade89099fc012e6381d6'
        spawn = Game.spawns['E17N56SPA1']
        upgradeCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "upgradeCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(upgradeCreeps[0])
        upgradeFromPOS = null
        upgradeCreep = new classes_creeps_upgradeCreep(null,energySource,roomController,room,upgradeFromPOS,null,[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE])
        
        this.creepWatch(spawn,upgradeCreeps,upgradeCreep)
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