class classes_creeps_snipeCreep {
    constructor(snipePos, roomName, partsArray) {
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.snipePos = snipePos
        this.partsArray = partsArray || [
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            TOUGH,
            MOVE,
            MOVE,
            MOVE,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
            RANGED_ATTACK,
        ]
        this.creepName = 'snipeCreep[' + this.roomName + ']-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.result = null
        this.badGuys = this.badGuys
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(this.partsArray, this.creepName + Game.time, {
                memory: {
                    creepClass: 'snipeCreep',
                    creepRoom: this.roomName,
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

    rangedAttack(creep) {
        this.badGuys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3)
        if (this.badGuys.length > 0) {
            this.result = creep.rangedAttack(this.badGuys[0])
            console.log('Attack result: ' + this.result)
        } else {
            creep.moveTo(Game.flags['snipeFlag0001'], {
                visualizePathStyle: { stroke: '#ffaa00' },
            })
        }
    }

    run(creep) {
        this.healerCreeps = _.filter(Game.creeps, (creep) => creep.memory.creepClass == 'healerCreep')
        if (this.healerCreeps.length > 0) {
            if (creep.pos.inRangeTo(this.healerCreeps[0], 1)) {
                if (creep.pos.roomName != this.roomName) {
                    creep.moveTo(new RoomPosition(25, 25, this.roomName), {
                        visualizePathStyle: { stroke: '#ffaa00' },
                    })
                } else {
                    this.rangedAttack(creep)
                }
            } else {
                if (creep.pos.roomName == this.roomName) {
                    if (this.healerCreeps[0].pos.roomName != this.roomName) {
                        creep.moveTo(new RoomPosition(47, 35, this.roomName), {
                            visualizePathStyle: { stroke: '#ffaa00' },
                        })
                    }
                }
            }
        }
    }
}

module.exports = classes_creeps_snipeCreep
