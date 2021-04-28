utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_buildCreep {
    constructor(storage, energySourceID, roomName, containerLimit, partsArray) {
        this.storage = Game.getObjectById(storage)
        this.energySource = Game.getObjectById(energySourceID)
        this.roomName = roomName
        this.containerLimit = containerLimit || 1200
        this.room = Game.rooms[roomName]
        this.constructionSite = this.constructionSite
        this.repairSite = this.repairSite
        this.partsArray = partsArray || [
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            WORK,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
        ]
        this.creepName = 'buildCreep[' + this.roomName + ']-'
        this.shouldGoBuild = ''
        this.result = null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(this.partsArray, this.creepName + Game.time, {
                memory: {
                    creepClass: 'buildCreep',
                    creepRoom: this.room.name,
                    creepSource: this.energySource.id,
                    creepParts: this.partsArray,
                    creepConstructionSite: this.constructionSite,
                    creepStorage: this.storage,
                    creepMovedIn: false,
                },
            })
            return this.result
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

    moveIn(creep) {
        if (this.room) {
            if (creep.pos.getRangeTo(new RoomPosition(25, 25, this.room.name)) < 23) {
                creep.memory.creepMovedIn = true
            } else creep.memory.creepMovedIn = false
            if (creep.memory.creepMovedIn == false) {
                if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0) {
                    creep.moveTo(
                        utils_pathfinding_avoidHostileCreeps.findPath(creep, new RoomPosition(25, 25, this.room.name))
                    )
                } else {
                    creep.moveTo(new RoomPosition(25, 25, this.room.name))
                }
            }
        } else {
            if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0) {
                creep.move(
                    utils_pathfinding_avoidHostileCreeps.findPath(creep, new RoomPosition(25, 25, this.roomName))
                )
            } else {
                creep.moveTo(new RoomPosition(25, 25, this.roomName))
            }
        }
    }

    harvestEnergySource(creep) {
        if (this.energySource) {
            this.result = creep.harvest(this.energySource)
            if (this.result == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.energySource)
                // if (this.result != 0) {
                //     //console.log("buildCreep harvest Error: " + this.result)
                // }
            }
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                return true
            } else {
                return false
            }
        }
    }

    build(creep) {
        this.result = creep.build(this.constructionSite)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.constructionSite)
        } // else
        //console.log(this.creepName + " Error: " + this.result)
    }

    repair(creep) {
        this.result = creep.repair(this.repairSite[0])
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.repairSite[0])
        } // else
        //console.log(this.creepName + " Error: " + this.result)
    }

    pickUpEnergy(creep) {
        this.result = creep.withdraw(this.storage, RESOURCE_ENERGY)
        if (this.result == ERR_NOT_IN_RANGE) {
            this.result = creep.moveTo(this.storage)
        }
    }

    run(creep) {
        //creep.memory.creepMovedIn = false
        if (creep.memory.creepMovedIn == true) {
            if (creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.creepBuild = false
            } else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                creep.memory.creepBuild = true
            }
            if (creep.memory.creepBuild) {
                if (creep.pos.roomName == this.roomName) {
                    this.constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
                    if (this.constructionSite) {
                        this.build(creep)
                    } else {
                        this.repairSite = this.room.find(FIND_STRUCTURES, {
                            filter: (object) =>
                                (object.hits < object.hitsMax && object.structureType == STRUCTURE_CONTAINER) ||
                                (object.hits < object.hitsMax && object.structureType == STRUCTURE_TOWER) ||
                                (object.hits < object.hitsMax && object.structureType == STRUCTURE_ROAD) ||
                                (object.hits < 10000 &&
                                    object.hits < object.hitsMax &&
                                    object.structureType == STRUCTURE_RAMPART),
                        })
                        if (this.repairSite.length > 0) {
                            this.repair(creep)
                        } else {
                            if (Game.flags[this.roomName + '_IDLFLA']) {
                                creep.moveTo(Game.flags[this.roomName + '_IDLFLA'])
                            }
                        }
                    }
                } else {
                    this.moveIn(creep)
                }
            } else {
                if (this.storage != null) {
                    if (this.storage.store[RESOURCE_ENERGY] > this.containerLimit) {
                        this.pickUpEnergy(creep)
                    } else {
                        this.harvestEnergySource(creep)
                    }
                } else this.harvestEnergySource(creep)
            }
        } else {
            this.moveIn(creep)
        }
    }
}

module.exports = classes_creeps_buildCreep
