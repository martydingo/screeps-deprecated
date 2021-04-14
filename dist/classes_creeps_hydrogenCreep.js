class classes_creeps_hydrogenCreep {
    constructor(hydrogen,hydrogenStore,roomName,partsArray){

        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY]
        this.creepName = 'hydrogenCreep\['+roomName+'\]-'
        this.hydrogen = Game.getObjectById(hydrogen)
        this.hydrogenStore = Game.getObjectById(hydrogenStore)
        this.result = this.result
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'hydrogenCreep',
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

    run(creep){
        if(creep.store.getFreeCapacity(RESOURCE_HYDROGEN) > 0){
            this.result = creep.harvest(this.hydrogen, RESOURCE_HYDROGEN)
            if(this.result == ERR_NOT_IN_RANGE){
                creep.moveTo(this.hydrogen)
            }
        } else
        if(this.hydrogenStore.store[RESOURCE_HYDROGEN < 15000]){
            this.result = creep.transfer(this.hydrogenStore, RESOURCE_HYDROGEN)
            if(this.result == ERR_NOT_IN_RANGE){
                creep.moveTo(this.hydrogenStore)
            }
        }
    }
}

module.exports = classes_creeps_hydrogenCreep

