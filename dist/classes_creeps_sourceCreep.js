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
            this.containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (object) =>
                    object.structureType == STRUCTURE_STORAGE ||
                    (object.structureType == STRUCTURE_CONTAINER &&
                        object.id != '60673c5129245f65a5d6fa3d' &&
                        object.id != '6068f47e6d58935c351d5f15'),
            })
            this.extensions = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (object) =>
                    object.structureType == STRUCTURE_EXTENSION &&
                    object.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
            })
            this.towers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (object) =>
                    object.structureType == STRUCTURE_TOWER &&
                    object.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
            })
            if (this.containers != null) {
                this.unloadDest = this.containers
            } else if (this.extensions != null) {
                this.unloadDest = this.extensions
            } else {
                if (this.towers != null) {
                    this.unloadDest = this.towers
                } else this.unloadDest = creep.room.find(FIND_MY_SPAWNS)[0]
            }
        } else {
            this.unloadDest = this.storage
        }
        if (this.unloadDest.hits < this.unloadDest.hitsMax / 2) {
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

    run(creep) {
        if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
            this.unloadEnergy(creep)
        } else {
            this.harvestEnergySource(creep)
        }
    }
}

module.exports = classes_creeps_sourceCreep
