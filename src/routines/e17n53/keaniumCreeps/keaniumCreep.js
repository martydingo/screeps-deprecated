const config_e17n53_respawn = require("config_e17n53_respawn")
const utils_creeps_renew = require('utils_creeps_renew')
const classes_creeps_keaniumCreep = require("classes_creeps_keaniumCreep")

var routines_e17n53_keaniumCreeps_keaniumCreep = {

    run: function () {
        room = 'E17N53'
        spawn = Game.spawns['E17N53SPA1']
        keanium = '5bbcb36440062e4259e94365'
        keaniumStore = '6071a510015f30575a4c36c5'
        holdingPos = new RoomPosition(46, 17, 'E17N53')

        keaniumCreeps = _.filter(Game.creeps, creep => creep.ticksToLive > 200 && creep.memory.creepClass == "keaniumCreep" && creep.memory.creepRoom == "E17N53")
        //console.log(keaniumCreeps[0])
        keaniumCreep = new classes_creeps_keaniumCreep(keanium,keaniumStore,room)
        
        
        if(!spawn.memory.spawnBlocked){
            this.creepWatch(spawn,keaniumCreeps,keaniumCreep)
        }
        this.creepAct(keaniumCreeps,keaniumCreep)
        
    },
    
    creepWatch: function (spawn, keaniumCreeps,keaniumCreep) {
        if (keaniumCreeps.length < config_e17n53_respawn.maxActive.keaniumCreep) {
            keaniumCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(keaniumCreeps,keaniumCreep){
        for(creep in keaniumCreeps){
            keaniumCreep.run(keaniumCreeps[creep])
        }
    }
}

module.exports = routines_e17n53_keaniumCreeps_keaniumCreep

