class classes_creeps_mistCreep {
    constructor(roomName, partsArray) {
        this.roomName = roomName
        this.room = Game.rooms[roomName]
        this.storage = Game.rooms['E17N53'].storage
        this.targetRoomName = 'E16N50'
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
        ]
        this.creepName = 'mistCreep[' + this.roomName + ']-'
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
                        creepClass: 'mistCreep',
                        creepRoom: this.roomName,
                        creepSource: this.mistSourceID,
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

    harvestMistSource(creep) {
        if (Game.rooms[this.targetRoomName]) {
            var mist = Game.rooms[this.targetRoomName].find(FIND_DEPOSITS, {
                filter: (Deposit) => Deposit.depositType == RESOURCE_MIST,
            })[0]
            var result = creep.harvest(mist)
            if (result == ERR_NOT_IN_RANGE) {
                creep.moveTo(mist)
            } else {
                if (result != OK && result != -11) {
                    console.log(result)
                }
            }
        }
    }

    unloadMist(creep) {
        var result = creep.transfer(this.storage, RESOURCE_MIST)
        if (result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.storage)
        }
        if (result == OK) {
            console.log('MistCreep has successfully delivered Mist')
        }
    }

    goHome(creep) {
        var curRoom = creep.pos.roomName
        if (curRoom == 'E16N50') {
            creep.moveTo(new RoomPosition(25, 2, 'E16N51'))
        } else {
            if (curRoom == 'E16N51') {
                creep.moveTo(new RoomPosition(25, 25, 'E16N52'))
            } else {
                if (curRoom == 'E16N52') {
                    creep.moveTo(new RoomPosition(25, 25, 'E17N52'))
                } else {
                    if (curRoom == 'E17N52') {
                        creep.moveTo(new RoomPosition(25, 25, 'E17N53'))
                    }
                }
            }
        }
    }

    goToMist(creep) {
        var curRoom = creep.pos.roomName
        if (curRoom == 'E17N53') {
            creep.moveTo(new RoomPosition(25, 25, 'E17N52'))
        } else {
            if (curRoom == 'E17N52') {
                creep.moveTo(new RoomPosition(25, 25, 'E16N52'))
            } else {
                if (curRoom == 'E16N52') {
                    creep.moveTo(new RoomPosition(25, 2, 'E16N51'))
                } else {
                    if (curRoom == 'E16N51') {
                        creep.moveTo(new RoomPosition(25, 25, 'E16N50'))
                    }
                }
            }
        }
    }

    run(creep) {
        if (creep.store.getFreeCapacity(RESOURCE_MIST) == 0) {
            if (creep.pos.roomName == this.storage.pos.roomName) {
                this.unloadMist(creep)
            } else {
                this.goHome(creep)
            }
        } else {
            if (creep.pos.roomName == this.roomName) {
                var droppedMist = this.room.find(FIND_DROPPED_RESOURCES, {
                    filter: (Resource) =>
                        Resource.resourceType == RESOURCE_MIST,
                })
                if (droppedMist.length >= 1) {
                    var result = creep.pickup(droppedMist[0])
                    if (result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedMist[0])
                    }
                } else {
                    this.harvestMistSource(creep)
                }
            } else {
                this.goToMist(creep)
            }
        }
    }
}

module.exports = classes_creeps_mistCreep
