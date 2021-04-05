const config_e17n55_respawn = require("config_e17n55_respawn")
const classes_creeps_hydrogenCreep = require("classes_creeps_hydrogenCreep")

var routines_e17n55_hydrogenCreeps_hydrogenCreep = {

    run: function () {
        room = 'E17N55'
        spawn = Game.spawns['E17N55SPA1']
        hydrogen = '5bbcb36440062e4259e94363'
        hydrogenStore = '6068f22ec5078bd54b49e57c'
        holdingPos = new RoomPosition(46, 17, 'E17N55')

        hydrogenCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "hydrogenCreep" && creep.memory.creepRoom == "E17N55")
        //console.log(hydrogenCreeps[0])
        hydrogenCreep = new classes_creeps_hydrogenCreep(hydrogen,hydrogenStore,room)
        
        
        this.creepWatch(spawn,hydrogenCreeps,hydrogenCreep)
        this.creepAct(hydrogenCreeps,hydrogenCreep)
        
    },
    
    creepWatch: function (spawn, hydrogenCreeps,hydrogenCreep) {
        if (hydrogenCreeps.length < config_e17n55_respawn.maxActive.hydrogenCreep) {
            hydrogenCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(hydrogenCreeps,hydrogenCreep){
        for(creep in hydrogenCreeps){
            hydrogenCreep.run(hydrogenCreeps[creep])
        }
    }
}

module.exports = routines_e17n55_hydrogenCreeps_hydrogenCreep

