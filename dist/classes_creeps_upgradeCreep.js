const utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_upgradeCreep {
    constructor(
        storage,
        energySourceID,
        roomController,
        roomName,
        upgradeFromPOS,
        container,
        partsArray
    ) {
        this.storage = Game.getObjectById(storage) || null
        this.roomController = Game.getObjectById(roomController)
        this.energySource = Game.getObjectById(energySourceID)
        this.container = Game.getObjectById(container) || null
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.partsArray = partsArray || [
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
            CARRY,
            CARRY,
        ]
        this.creepName = 'upgradeCreep[' + this.roomName + ']-'
        this.result = null
        this.upgradeFromPOS = upgradeFromPOS || null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'upgradeCreep',
                        creepRoom: this.roomName,
                        creepSource: this.energySource.id,
                        creepController: this.roomController.id,
                        creepParts: this.partsArray,
                        creepUpgrade: false,
                        creepContainer: this.container,
                        creepUpgradeFromPOS: this.upgradeFromPOS,
                        creepBoostedParts: true,
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
            if (creep.harvest(this.energySource) == ERR_NOT_IN_RANGE) {
                if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0) {
                    creep.moveTo(
                        utils_pathfinding_avoidHostileCreeps.findPath(
                            creep,
                            this.energySource
                        )
                    )
                } else {
                    creep.moveTo(this.energySource, {
                        visualizePathStyle: { stroke: '#EFDF70' },
                    })
                }
            }
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                return true
            } else {
                return false
            }
        }
    }

    pickUpEnergy(creep, storage) {
        this.result = creep.withdraw(storage, RESOURCE_ENERGY)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(storage, { visualizePathStyle: { stroke: '#EFDF70' } })
        }
    }

    upgrade(creep) {
        this.result = creep.upgradeController(this.roomController)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.roomController, {
                visualizePathStyle: { stroke: '#EFDF70' },
            })
        }
    }

    run(creep) {
        if (
            creep.memory.creepBoostedParts == true &&
            (this.roomName == 'E17N55' || this.roomName == 'E17N53')
        ) {
            if (this.roomName == 'E17N55') {
                var boosterLab = Game.getObjectById('608207602f26bfe5973ba9a2')
                if (boosterLab.store[RESOURCE_CATALYZED_GHODIUM_ACID] >= 1200) {
                    for (var part in creep.body) {
                        if (creep.body[part].type == WORK) {
                            console.log(creep.body[part].boost)
                            if (!creep.body[part].boost) {
                                creep.memory.creepBoostedParts = false
                            } else {
                                creep.memory.creepBoostedParts = true
                            }
                        }
                    }
                } else {
                    creep.memory.creepBoostedParts = true
                }
            }
            if (this.roomName == 'E17N53') {
                var boosterLab = Game.getObjectById('608a25788227a443ccb8e792')
                if (boosterLab.store[RESOURCE_CATALYZED_GHODIUM_ACID] >= 1200) {
                    for (var part in creep.body) {
                        if (creep.body[part].type == WORK) {
                            console.log(creep.body[part].boost)
                            if (!creep.body[part].boost) {
                                creep.memory.creepBoostedParts = false
                            } else {
                                creep.memory.creepBoostedParts = true
                            }
                        }
                    }
                } else {
                    creep.memory.creepBoostedParts = true
                }
            }
        }
        if (
            creep.memory.creepBoostedParts == false &&
            (this.roomName == 'E17N55' || this.roomName == 'E17N53')
        ) {
            if (this.roomName == 'E17N55') {
                if (creep.memory.creepBoostedParts == false) {
                    var boosterLab = Game.getObjectById(
                        '608207602f26bfe5973ba9a2'
                    )
                    if (
                        boosterLab.store[RESOURCE_CATALYZED_GHODIUM_ACID] >=
                        1200
                    ) {
                        var result = boosterLab.boostCreep(creep)
                        if (result == ERR_NOT_IN_RANGE) {
                            creep.moveTo(boosterLab)
                        }
                    }
                    for (var part in creep.body) {
                        if (creep.body[part].type == WORK) {
                            console.log(creep.body[part].boost)
                            if (!creep.body[part].boost) {
                                creep.memory.creepBoostedParts = false
                            } else {
                                creep.memory.creepBoostedParts = true
                            }
                        }
                    }
                }
            }
            if (this.roomName == 'E17N53') {
                if (creep.memory.creepBoostedParts == false) {
                    var boosterLab = Game.getObjectById(
                        '608a25788227a443ccb8e792'
                    )
                    if (
                        boosterLab.store[RESOURCE_CATALYZED_GHODIUM_ACID] >=
                        1200
                    ) {
                        var result = boosterLab.boostCreep(creep)
                        if (result == ERR_NOT_IN_RANGE) {
                            creep.moveTo(boosterLab)
                        }
                    }
                    for (var part in creep.body) {
                        if (creep.body[part].type == WORK) {
                            console.log(creep.body[part].boost)
                            if (!creep.body[part].boost) {
                                creep.memory.creepBoostedParts = false
                            } else {
                                creep.memory.creepBoostedParts = true
                            }
                        }
                    }
                }
            }
        } else {
            if (creep.store[RESOURCE_ENERGY] < 3) {
                creep.memory.creepUpgrade = false
            } else if (
                creep.store[RESOURCE_ENERGY] ==
                creep.store.getCapacity(RESOURCE_ENERGY)
            ) {
                creep.memory.creepUpgrade = true
            }
            if (creep.memory.creepUpgrade) {
                // if(upgradeFromPOS){
                //     if(creep.pos.getRangeTo(upgradeFromPOS)>3){
                //         this.result = creep.moveTo(upgradeFromPOS, {visualizePathStyle: { stroke: '#EFDF70',},})
                //     } else {
                //         this.upgrade(creep)
                //     }
                // } else
                this.upgrade(creep)
            } else {
                // console.log(this.roomName + ' + ' + this.storage)
                if (this.storage != null) {
                    if (this.storage.store[RESOURCE_ENERGY] > 5000) {
                        this.pickUpEnergy(creep, this.storage)
                    } else if (this.container != null) {
                        if (this.container.store[RESOURCE_ENERGY] > 300) {
                            this.pickUpEnergy(creep, this.container)
                        }
                    } else this.harvestEnergySource(creep)
                } else this.harvestEnergySource(creep)
            }
        }
    }
}

module.exports = classes_creeps_upgradeCreep
