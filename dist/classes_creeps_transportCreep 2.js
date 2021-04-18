class classes_creeps_transportCreep {
    constructor(origin, destination, roomName, partsArray, resourceType, remoteLimit, origin2){
        this.origin = Game.getObjectById(origin)
        this.origin2 = Game.getObjectById(origin2)
        this.destination = Game.getObjectById(destination)
        this.resourceType = resourceType || RESOURCE_ENERGY
        this.remoteLimit = remoteLimit
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [WORK,MOVE,WORK,CARRY]
        this.creepName = 'transportCreep\['+this.room.name+'\]-'
        this.result = this.result
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'transportCreep',
                        creepRoom: this.room.name,
                        creepParts: this.partsArray,
                        creepOrigin: this.origin,
                        creepDestination: this.destination                    }
                })
            )
            return this.result
        }

    }

    pickUp(creep){
        this.result = creep.withdraw(this.origin, this.resourceType)
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(this.origin)
        } else {
            if(this.result == -6){
                this.result = creep.withdraw(this.origin2, this.resourceType)
            }
        }
    }

    dropOff(creep){
        this.result = creep.transfer(this.destination, this.resourceType)
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(this.destination)
        }

    }

    canSpawn(spawner){
        if(spawner.spawnCreep(this.partsArray,this.creepName, { dryRun: true }) == 0){
            return true
        } else
        return false
    }
    
    
    run(creep){
        if(this.remoteLimit){
            if(this.destination.store[RESOURCE_ENERGY] < this.remoteLimit){
                if(creep.store[this.resourceType] < creep.store.getFreeCapacity(this.resourceType)){
                    this.pickUp(creep)
                } else {
                    this.dropOff(creep)
                }
            }
        } else {
            if(creep.store[this.resourceType] < creep.store.getFreeCapacity(this.resourceType)){
                this.pickUp(creep)
            } else {
                this.dropOff(creep)
            }
        }
    }
}

module.exports = classes_creeps_transportCreep