const config_e16n54_respawn = require("config_e16n54_respawn")
const classes_creeps_utriumCreep = require("classes_creeps_utriumCreep")

var routines_e16n54_utriumCreeps_srcOne = {

    run: function () {
        room = 'E16N54'
        spawn = Game.spawns['E17N55SPA1']
        utrium = '5bbcb7b61e7d3f3cbe2509ef'
        utriumStore = '60673c5129245f65a5d6fa3d'
        keeperLair = '5bbcaddb9099fc012e637fa9'
        holdingPos = new RoomPosition(46, 17, 'E16N54')

        utriumCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "utriumCreep")
        //console.log(utriumCreeps[0])
        utriumCreep = new classes_creeps_utriumCreep(utrium,utriumStore,room,holdingPos,keeperLair)
        
        
        this.creepWatch(spawn,utriumCreeps,utriumCreep)
        this.creepAct(utriumCreeps,utriumCreep)
        
    },
    
    creepWatch: function (spawn, utriumCreeps,utriumCreep) {
        if (utriumCreeps.length < config_e16n54_respawn.maxActive.utriumCreep) {
            utriumCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(utriumCreeps,utriumCreep){
        for(creep in utriumCreeps){
            utriumCreep.run(utriumCreeps[creep])
        }
    }
}

module.exports = routines_e16n54_utriumCreeps_srcOne