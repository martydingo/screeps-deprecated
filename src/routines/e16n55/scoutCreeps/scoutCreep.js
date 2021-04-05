const config_e16n55_respawn = require("config_e16n55_respawn")
const classes_creeps_scoutCreep = require("classes_creeps_scoutCreep")

var routines_e16n55_scoutCreeps_scoutCreep = {

    run: function () {
        room = 'E16N55'
        spawn = Game.spawns['E17N55SPA1']
        targetPos = new RoomPosition(45,38,room)
        scoutCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "scoutCreep" && creep.memory.creepRoom == room )
        //console.log(scoutCreeps[0])
        scoutCreep = new classes_creeps_scoutCreep(room,[MOVE],targetPos)
        
        this.creepWatch(spawn,scoutCreeps,scoutCreep)
        this.creepAct(scoutCreeps,scoutCreep)
        
    },
    
    creepWatch: function (spawn, scoutCreeps,scoutCreep) {
        if (scoutCreeps.length < config_e16n55_respawn.maxActive.scoutCreep) {
            scoutCreep.spawnCreep(spawn)
        }
    },

    
    creepAct: function(scoutCreeps,scoutCreep){
        for(creep in scoutCreeps){
            if(scoutCreeps[creep].memory.creepRoom == room){
                scoutCreep.run(scoutCreeps[creep])
            }
        }
    }
}

module.exports = routines_e16n55_scoutCreeps_scoutCreep