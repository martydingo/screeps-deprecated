utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_oxygenCreep {
    constructor(oxygen,oxygenStore,roomName,partsArray){

        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.hostileCreeps = this.hostileCreeps
        this.partsArray = partsArray || [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE,CARRY]
        this.creepName = 'oxygenCreep\['+roomName+'\]-'
        this.oxygen = Game.getObjectById(oxygen)
        this.oxygenStore = Game.getObjectById(oxygenStore)
        this.result = this.result
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'oxygenCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray
                    }
                })
            )
            return this.result
        }

    }

    canSpawn(spawner){
        if(spawner.spawnCreep(this.partsArray,this.creepName, { dryRun: true }) == 0){
            return true
        } else
        return false
    }
    
    
    run(creep){
        if(this.room){
            if(creep.store.getFreeCapacity(RESOURCE_OXYGEN) > 0){
                this.hostileCreeps = this.room.find(FIND_HOSTILE_CREEPS)
                this.result = creep.harvest(this.oxygen)
                    if(this.result == ERR_NOT_IN_RANGE){
                        creep.moveTo(utils_pathfinding_avoidHostileCreeps.findPath(creep,this.oxygen.pos))
                    }
            } else {
                this.result = creep.transfer(this.oxygenStore, RESOURCE_OXYGEN)
                if(this.result == ERR_NOT_IN_RANGE){
                    creep.moveTo(utils_pathfinding_avoidHostileCreeps.findPath(creep,this.oxygenStore.pos))
                }
            }
        } else {
            creep.moveTo(new RoomPosition(25,25,this.roomName))
        }
    }
}

module.exports = classes_creeps_oxygenCreep