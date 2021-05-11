utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_sourceCreep {
    constructor(storage, energySourceID, roomName, partsArray) {
        this.storage = Game.getObjectById(storage)
        this.energySource = Game.getObjectById(energySourceID)
        this.energySourceID = energySourceID
        this.roomName = roomName
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            CARRY,
        ]
        this.creepName = 'sourceCreep[' + this.roomName + ']-'
        this.containers = []
        this.extensions = []
        this.spawns = []
        this.unloadDest = ''
        this.result = ''
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'sourceCreep',
                        creepRoom: this.roomName,
                        creepSource: this.energySourceID,
                        creepParts: this.partsArray,
                    },
                }
            )
            return this.result
        }
    }

    canSpawn(spawner) {
        this.result = spawner.spawnCreep(this.partsArray, this.creepName, {
            dryRun: true,
        })
        if (this.result == 0) {
            return true
        } else return false
    }

    harvestEnergySource(creep) {
        if (this.energySource) {
            if (creep.room.find(FIND_HOSTILE_CREEPS).length < 1) {
                if (creep.harvest(this.energySource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.energySource)
                }
            } else {
                if (creep.harvest(this.energySource) == ERR_NOT_IN_RANGE) {
                    if (creep.pos.roomName == 'E16N53') {
                        creep.moveTo(new RoomPosition(25, 25, this.roomName))
                    } else {
                        creep.moveTo(
                            utils_pathfinding_avoidHostileCreeps.findPath(
                                creep,
                                this.energySource.pos
                            )
                        )
                    }
                }
            }
        } else {
            creep.moveTo(new RoomPosition(25, 25, this.roomName))
        }
    }

    unloadEnergy(creep) {
        if (this.storage == null) {
            creep.drop(RESOURCE_ENERGY)
            this.unloadDest = null
        } else {
            this.unloadDest = this.storage
        }
        if (this.unloadDest) {
            if (this.unloadDest.hits < this.unloadDest.hitsMax) {
                creep.repair(this.unloadDest)
            } else {
                this.result = creep.transfer(this.unloadDest, RESOURCE_ENERGY)
                if (this.result == ERR_NOT_IN_RANGE) {
                    this.result = creep.moveTo(this.unloadDest)
                    // console.log(creep + " - " + this.result + " - " + this.unloadDest)
                } //else
                // if(this.result != 0){
                //     //console.log(this.creepName + " Error: " + this.result)
                // }
            }
        }
    }

    run(creep) {
        if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            this.unloadEnergy(creep)
        } else {
            this.harvestEnergySource(creep)
        }
    }
}

module.exports = classes_creeps_sourceCreep
