class classes_creeps_upgradeCreep {
    constructor(storage, energySourceID, roomController, roomName, upgradeFromPOS, container, partsArray){
        this.storage = Game.getObjectById(storage) || null
        this.roomController = Game.getObjectById(roomController)
        this.energySource = Game.getObjectById(energySourceID)
        this.container = Game.getObjectById(container) || Game.getObjectById('605cf742e96436c85b848964')
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY]
        this.creepName = 'upgradeCreep\['+this.room.name+'\]-'
        this.result = this.result
        this.upgradeFromPOS = upgradeFromPOS || this.upgradeFromPOS || new RoomPosition(6, 42, 'E17N55')
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'upgradeCreep',
                        creepRoom: this.room.name,
                        creepSource: this.energySource.id,
                        creepController: this.roomController.id,
                        creepParts: this.partsArray,
                        creepUpgrade: false,
                        creepContainer: this.container,
                        creepUpgradeFromPOS: this.upgradeFromPOS
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

    harvestEnergySource(creep){
        if(this.energySource) {
            if(creep.harvest(this.energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.energySource);
            }
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
            return true
        } 
        else 
        {
            return false
        }   
        }
    }

    pickUpEnergy(creep, storage){
        this.result = creep.withdraw(storage, RESOURCE_ENERGY)
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(storage)
        }
    }


    upgrade(creep){
        this.result = creep.upgradeController(this.roomController)
        if(this.result == ERR_NOT_IN_RANGE){
            creep.moveTo(this.roomController)
        }
    }
    
    
    run(creep){
        if (creep.store[RESOURCE_ENERGY] < 3) {
            creep.memory.creepUpgrade = false
        } else
        if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity(RESOURCE_ENERGY)) {
            creep.memory.creepUpgrade = true
        }
        if(creep.memory.creepUpgrade){
            if(upgradeFromPOS){
                if(creep.pos.getRangeTo(upgradeFromPOS)>2){
                    this.result = creep.moveTo(upgradeFromPOS)
                } else {
                    this.upgrade(creep)
                }
            } else
            this.upgrade(creep)
            
        } else {
            if(this.storage != null){
                if(this.storage.store[RESOURCE_ENERGY] > 5000){
                    this.pickUpEnergy(creep, this.storage)
                } else if(this.container != null){
                    if(this.container.store[RESOURCE_ENERGY] > 1600 || this.container.id == '607adf9af2a970d033902c00'){
                        this.pickUpEnergy(creep, this.container)
                    }
                } else
                this.harvestEnergySource(creep)
            } else 
        this.harvestEnergySource(creep)
        }
    }
}

module.exports = classes_creeps_upgradeCreep