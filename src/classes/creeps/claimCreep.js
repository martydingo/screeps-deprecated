const utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')

class classes_creeps_claimCreep {
    constructor(roomName, reserveController, partsArray) {
        this.reserveController = reserveController || true
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.partsArray = partsArray || [CLAIM, MOVE, MOVE, CLAIM]
        this.creepName = 'claimCreep[' + this.roomName + ']-'
        this.result = null
        this.movedIn = true
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'claimCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray,
                        creepMovedIn: this.movedIn,
                        creepTargetRoom: this.targetRoomPos,
                        creepReserveController: this.reserveController,
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

    moveInAndClaim(creep) {
        try {
            if (creep.pos.getRangeTo(this.targetRoomPos) < 20) {
                creep.memory.creepMovedIn = true
            }
            // eslint-disable-next-line no-empty
        } catch (err) {}
        if (creep.memory.creepMovedIn == false) {
            // creep.moveTo(this.targetRoomPos,{
            //     visualizePathStyle: {
            //         stroke: "#302de3"
            //     }
            // })
            creep.move(
                utils_pathfinding_avoidHostileCreeps.findPath(
                    creep,
                    this.targetRoomPos
                )
            )
        } else {
            this.result = creep.claimController(this.room.controller)
            if (this.result == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.room.controller, {
                    visualizePathStyle: {
                        stroke: '#302de3',
                    },
                })
            }
        }
    }

    moveInAndReserve(creep) {
        if (!this.room) {
            creep.moveTo(new RoomPosition(25, 25, this.roomName))
        } else {
            if (this.room.controller.reservation) {
                if (this.room.controller.reservation.username == 'Marty') {
                    this.result = creep.reserveController(this.room.controller)
                    if (this.result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(this.room.controller, {
                            visualizePathStyle: {
                                stroke: '#302de3',
                            },
                        })
                    }
                } else {
                    this.result = creep.attackController(this.room.controller)
                    if (this.result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(this.room.controller, {
                            visualizePathStyle: {
                                stroke: '#302de3',
                            },
                        })
                    }
                }
            } else {
                this.result = creep.reserveController(this.room.controller)
                if (this.result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.room.controller, {
                        visualizePathStyle: {
                            stroke: '#302de3',
                        },
                    })
                }
            }
        }
    }

    run(creep) {
        if (this.reserveController == false) {
            this.moveInAndClaim(creep)
        } else this.moveInAndReserve(creep)
    }
}

module.exports = classes_creeps_claimCreep
