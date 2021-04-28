utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_mistCreep {
    constructor(storage, mistSourceID, roomName, partsArray) {
        this.storage = Game.getObjectById(storage)
        this.mistSource = Game.getObjectById(mistSourceID)
        this.mistSourceID = mistSourceID
        this.roomName = roomName
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [
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
            MOVE,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
        ]
        this.creepName = 'mistCreep[' + this.roomName + ']-'
        this.containers = []
        this.extensions = []
        this.spawns = []
        this.unloadDest = ''
        this.result = ''
        this.path = this.path
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(this.partsArray, this.creepName + Game.time, {
                memory: {
                    creepClass: 'mistCreep',
                    creepRoom: this.roomName,
                    creepSource: this.mistSourceID,
                    creepParts: this.partsArray,
                },
            })
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

    harvestMistSource(creep) {
        if (this.mistSource) {
            if (creep.room.find(FIND_HOSTILE_CREEPS).length < 1) {
                if (creep.harvest(this.mistSource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.mistSource)
                }
            } else {
                if (creep.harvest(this.mistSource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(utils_pathfinding_avoidHostileCreeps.findPath(creep, this.mistSource.pos))
                }
            }
        } else {
            creep.moveTo(utils_pathfinding_avoidHostileCreeps.findPath(creep, new RoomPosition(25, 25, this.roomName)))
        }
    }

    unloadMist(creep) {
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
                    object.structureType == STRUCTURE_EXTENSION && object.store.getFreeCapacity(RESOURCE_MIST) > 0,
            })
            this.towers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (object) =>
                    object.structureType == STRUCTURE_TOWER && object.store.getFreeCapacity(RESOURCE_MIST) > 0,
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
        if (this.unloadDest.hits < this.unloadDest.hitsMax) {
            creep.repair(this.unloadDest)
        } else {
            this.result = creep.transfer(this.unloadDest, RESOURCE_MIST)
            if (this.result == ERR_NOT_IN_RANGE) {
                if (creep.pos.roomName == 'E19N50') {
                    creep.moveTo(new RoomPosition(25, 25, 'E18N50'))
                } else {
                    this.result = creep.moveTo(utils_pathfinding_avoidHostileCreeps.findPath(creep, this.unloadDest))
                }
                // console.log(creep + " - " + this.result + " - " + this.unloadDest)
            } //else
            // if(this.result != 0){
            //     //console.log(this.creepName + " Error: " + this.result)
            // }
        }
    }

    run(creep) {
        if (creep.store.getFreeCapacity(RESOURCE_MIST) == 0) {
            this.unloadMist(creep)
        } else {
            this.harvestMistSource(creep)
        }
    }
}

module.exports = classes_creeps_mistCreep
