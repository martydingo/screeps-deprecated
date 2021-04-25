const config_e17n56_respawn = require("config_e17n56_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_hydrogenCreep = require("classes_creeps_hydrogenCreep")

var routines_e17n56_hydrogenCreeps_hydrogenCreep = {

    run: function () {
        room = 'E17N56'
        spawn = Game.spawns['E17N56SPA1']
        hydrogen = '5bbcb36440062e4259e94362'
        hydrogenStore = '6073eaedcea495164e18734a'
        holdingPos = new RoomPosition(46, 17, 'E17N56')

        hydrogenCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "hydrogenCreep" && creep.memory.creepRoom == "E17N56")
        //console.log(hydrogenCreeps[0])
        hydrogenCreep = new classes_creeps_hydrogenCreep(hydrogen,hydrogenStore,room)
        
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,hydrogenCreeps,hydrogenCreep)
        }
        this.creepAct(hydrogenCreeps,hydrogenCreep)
        
    },
    
    creepWatch: function (spawn, hydrogenCreeps,hydrogenCreep) {
        if (hydrogenCreeps.length < config_e17n56_respawn.maxActive.hydrogenCreep) {
            hydrogenCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(hydrogenCreeps,hydrogenCreep){
        for(creep in hydrogenCreeps){
            if(hydrogenCreeps[creep].ticksToLive < 400){
                hydrogenCreeps[creep].memory.creepShouldRenew = true
            }
            if(hydrogenCreeps[creep].ticksToLive > 1400){
                hydrogenCreeps[creep].memory.creepShouldRenew = false
            }
            if(hydrogenCreeps[creep].memory.creepShouldRenew) {
                if(hydrogenCreeps[creep].memory.creepShouldRenew == false){
                    hydrogenCreep.run(hydrogenCreeps[creep])
                } else {
                    utils_creeps_renew.renewCreep(hydrogenCreeps[creep],spawn)
                }
            } else { 
                hydrogenCreep.run(hydrogenCreeps[creep])
            }
        }
    }
}
module.exports = routines_e17n56_hydrogenCreeps_hydrogenCreep

