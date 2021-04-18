const config_e17n56_respawn = require("config_e17n56_respawn")
const config_e17n56_sources = require("config_e17n56_sources")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_feederCreep = require("classes_creeps_feederCreep")

var routines_e17n56_feederCreeps_feederCreep = {

    run: function () {
        room = 'E17N56'
        origin = '6073eaedcea495164e18734a'
        resourceType = RESOURCE_ENERGY
        extraTargets = ['607adf9af2a970d033902c00']
        energySource = config_e17n56_sources.srcTwo
        spawn = Game.spawns['E17N56SPA1']
        feederCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "feederCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(feederCreeps[0])
        feederCreep = new classes_creeps_feederCreep(origin,energySource,resourceType,room,null,extraTargets)
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,feederCreeps,feederCreep)
        }
        this.creepAct(feederCreeps,feederCreep)
        
    },
    
    creepWatch: function (spawn, feederCreeps,feederCreep) {
        if (feederCreeps.length < config_e17n56_respawn.maxActive.feederCreep) {
            feederCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(feederCreeps,feederCreep){
        for(creep in feederCreeps){
            feederCreep.run(feederCreeps[creep])
        }
    }
}

module.exports = routines_e17n56_feederCreeps_feederCreep