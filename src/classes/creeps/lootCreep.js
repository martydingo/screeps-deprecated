class classes_creeps_lootCreep {
    constructor(roomName, partsArray){

        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [CARRY,CARRY,MOVE,MOVE]
        this.creepName = 'lootCreep\['+this.room.name+'\]-'
        this.result = this.result
        this.lootTarget = this.lootTarget
        this.lootTombstone = this.lootTombstone

    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'lootCreep',
                        creepRoom: this.room.name,
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

    pickUpLoot(creep){
        this.result = creep.pickup(this.lootTarget[0])
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(this.lootTarget[0])
        }

    }

    withdrawLoot(creep){
        this.result = creep.withdraw(this.lootTombstone[0], RESOURCE_ENERGY)
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(this.lootTombstone[0])
        }

    }

    
    dropOffLoot(creep){
        this.result = creep.transfer(this.unloadDest, RESOURCE_ENERGY)
        if(this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.unloadDest);
        }
    }
    
    run(creep){
        if (creep.store[RESOURCE_ENERGY] == 0) {
            this.lootTarget = creep.room.find(FIND_DROPPED_RESOURCES, {filter: object => object.amount > 30}).sort((a,b) => b.amount + a.amount)
            this.lootTombstone = creep.room.find(FIND_TOMBSTONES, {filter: object => object.store[RESOURCE_ENERGY] > 30}).sort((a,b) => b.store[RESOURCE_ENERGY] + a.store[RESOURCE_ENERGY])
            if(this.lootTombstone[0]){
                this.withdrawLoot(creep)
            } else {
            if(this.lootTarget[0]){
                this.pickUpLoot(creep)
            } else
                creep.moveTo(Game.flags[room+'_idleArea'])
            }
        } else {
            this.containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter:  object => object.structureType == STRUCTURE_STORAGE || object.structureType == STRUCTURE_CONTAINER && object.id != '60673c5129245f65a5d6fa3d' && object.id != '6068f47e6d58935c351d5f15'
            })
            if(this.containers != null){
                this.unloadDest = this.containers
                this.dropOffLoot(creep)
            }

        }
    }
}

module.exports = classes_creeps_lootCreep