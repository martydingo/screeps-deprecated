class classes_creeps_transportCreep {
    constructor(
        origin,
        destination,
        roomName,
        partsArray,
        resourceType,
        remoteLimit,
        localLimit,
        secondaryOrigin,
        secondaryDestination
    ) {
        this.localLimit = localLimit || null
        this.origin = Game.getObjectById(origin)
        this.secondaryOrigin = Game.getObjectById(secondaryOrigin)
        this.destination = Game.getObjectById(destination)
        this.secondaryDestination = secondaryDestination
        this.resourceType = resourceType || RESOURCE_ENERGY
        this.remoteLimit = remoteLimit || null
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.partsArray = partsArray || [WORK, MOVE, WORK, CARRY]
        this.creepName = 'transportCreep[' + this.roomName + ']-'
        this.result = null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'transportCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray,
                        creepOrigin: this.origin,
                        creepsecondaryOrigin: this.secondaryOrigin,
                        creepDestination: this.destination,
                        creepResourceType: this.resourceType,
                    },
                }
            )
            return this.result
        }
    }

    pickUp(creep) {
        if (this.secondaryOrigin) {
            if (this.origin.store[this.resourceType] < 1) {
                this.result = creep.withdraw(
                    this.secondaryOrigin,
                    this.resourceType
                )
                if (this.result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.secondaryOrigin)
                }
            } else {
                this.result = creep.withdraw(this.origin, this.resourceType)
                if (this.result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.origin)
                }
            }
        } else {
            if (this.origin.store[this.resourceType] > 0) {
                this.result = creep.withdraw(this.origin, this.resourceType)
                if (this.result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.origin)
                }
            }
        }
    }

    dropOff(creep) {
        this.result = creep.transfer(this.destination, this.resourceType)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.destination)
        }
    }

    canSpawn(spawner) {
        if (
            spawner.spawnCreep(this.partsArray, this.creepName, {
                dryRun: true,
            }) == 0
        ) {
            return true
        } else return false
    }

    repairRoad(creep) {
        creep.pos
            .findInRange(FIND_STRUCTURES, 0, {
                filter: (structure) =>
                    structure.structureType == STRUCTURE_ROAD &&
                    structure.hits < structure.hitsMax,
            })
            .forEach((road) => {
                if (creep.store[RESOURCE_ENERGY] > 0) {
                    creep.repair(road)
                }
            })
    }

    run(creep) {
        if (creep.getActiveBodyparts(WORK) > 0) {
            this.repairRoad(creep)
        }
        if (this.remoteLimit) {
            if (this.destination.store[this.resourceType] < this.remoteLimit) {
                if (
                    creep.store[this.resourceType] <
                    creep.store.getFreeCapacity(this.resourceType)
                ) {
                    this.pickUp(creep)
                } else {
                    this.dropOff(creep)
                }
            }
        } else {
            if (this.localLimit) {
                if (this.origin.store[this.resourceType] > this.remoteLimit) {
                    if (
                        creep.store[this.resourceType] <
                        creep.store.getFreeCapacity(this.resourceType)
                    ) {
                        this.pickUp(creep)
                    } else {
                        this.dropOff(creep)
                    }
                }
            } else {
                if (
                    creep.store[this.resourceType] <
                    creep.store.getFreeCapacity(this.resourceType)
                ) {
                    this.pickUp(creep)
                } else {
                    this.dropOff(creep)
                }
            }
        }
    }
}

module.exports = classes_creeps_transportCreep
