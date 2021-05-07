class classes_creeps_feederCreep {
    constructor(origin, destination, resourceType, roomName, partsArray) {
        this.origin = Game.getObjectById(origin)
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [
            MOVE,
            MOVE,
            CARRY,
            CARRY,
            MOVE,
            MOVE,
            CARRY,
            CARRY,
        ]
        this.creepName = 'feederCreep[' + this.room.name + ']-'
        this.destination = this.destination
        this.result = null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'feederCreep',
                        creepRoom: this.room.name,
                        creepParts: this.partsArray,
                        creepOrigin: this.origin,
                        creepDestination: this.destination,
                    },
                }
            )
            return this.result
        }
    }

    pickUp(creep) {
        this.result = creep.withdraw(this.origin, RESOURCE_ENERGY)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.origin)
        }
    }

    dropOff(creep) {
        this.destination = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (object) =>
                (object.structureType == STRUCTURE_EXTENSION &&
                    object.store.getFreeCapacity(RESOURCE_ENERGY) > 0) ||
                (object.structureType == STRUCTURE_SPAWN &&
                    object.store.getFreeCapacity(RESOURCE_ENERGY) > 0 &&
                    object.id != Game.spawns['E17N55SPA1'].id),
        })

        if (this.destination == null) {
            this.destination = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (object) =>
                    object.structureType == STRUCTURE_TOWER &&
                    object.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
            })
        }
        this.result = creep.transfer(this.destination, RESOURCE_ENERGY)
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

    run(creep) {
        if (
            creep.store.getCapacity(RESOURCE_ENERGY) -
                creep.store.getFreeCapacity(RESOURCE_ENERGY) <
            50
        ) {
            this.pickUp(creep)
        } else {
            this.dropOff(creep)
        }
    }
}

module.exports = classes_creeps_feederCreep
