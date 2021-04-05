class classes_creeps_transportCreep {
    constructor(origin, destination, roomName, partsArray, resourceType){
        this.origin = Game.getObjectById(origin)
        this.destination = Game.getObjectById(destination)
        this.resourceType = resourceType || RESOURCE_ENERGY
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
        if(creep.store[this.resourceType] < creep.store.getFreeCapacity(this.resourceType)){
            this.pickUp(creep)
        } else {
            this.dropOff(creep)
        }
    }
}

module.exports = classes_creeps_transportCreep