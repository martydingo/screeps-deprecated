class classes_creeps_warriorCreep {
    constructor(roomName, partsArray){
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.partsArray = partsArray || [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL,HEAL]
        this.creepName = 'warriorCreep\['+this.roomName+'\]-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.result = this.result
        this.badGuys = this.badGuys
        this.healerCreeps = this.healerCreeps
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'warriorCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray
                    }
                })
            )
            return this.result
        }

    }

    canSpawn(spawner){
        this.result = spawner.spawnCreep(this.partsArray,this.creepName, { dryRun: true })
        if(this.result == 0){
            return true
        } else
        return false
    }
    
    attack(creep){
        this.badGuys = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 25)
        if(this.badGuys.length < 1){
            this.badGuys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 25)
        }
        if(this.badGuys.length > 0){
            this.result = creep.attack(this.badGuys[0])
            if(this.result == ERR_NOT_IN_RANGE){
                creep.moveTo(this.badGuys[0])
            }
            console.log('Attack result: ' + this.result)
        } else {
            creep.moveTo(new RoomPosition(25,25,this.roomName))
        }

    }
    
    run(creep){
        //this.healerCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "healerCreep")
        //if(this.healerCreeps.length > 0){
           // if(creep.pos.inRangeTo(this.healerCreeps[0],1)){
               if(creep.pos.roomName != this.roomName){
                   creep.moveTo(new RoomPosition(25,25,this.roomName))
                } else {
                    this.attack(creep)
                }
          //  } else {
              //  if(creep.pos.roomName == this.roomName){
                //    if(this.healerCreeps[0].pos.roomName != this.roomName){
                  //      creep.moveTo(new RoomPosition(47, 35, this.roomName))
             //       }
               // }
            //}
        //}
    }
}

module.exports = classes_creeps_warriorCreep