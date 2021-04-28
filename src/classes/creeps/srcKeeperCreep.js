class classes_creeps_srcKeeperCreep {
    constructor(roomName, campPos, lab, secondLair, partsArray) {
        this.lab = Game.getObjectById(lab)
        this.requiredBoostedParts = 1
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.campPos = campPos
        this.secondLair = Game.getObjectById(secondLair)
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
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            ATTACK,
            HEAL,
            HEAL,
            HEAL,
            HEAL,
            HEAL,
        ]
        this.creepName = 'srcKeeperCreep[' + this.roomName + ']-'
        this.returnToBase = this.returnToBase
        this.result = null
        this.badGuys = this.badGuys
        this.spawner = this.spawner
        this.count = this.count
        this.part = this.part
        this.boostedBodyParts = this.boostedBodyParts
    }

    spawnCreep(spawner) {
        this.spawner = spawner
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'srcKeeperCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray,
                        creepCampPos: this.campPos,
                        creepReturnToBase: this.returnToBase,
                        creepSpawner: this.spawner,
                    },
                }
            )
            return this.result
        }
    }

    countBoostedParts(creep) {
        this.count = 0
        for (this.part in creep.body) {
            if (creep.body[this.part].boost) {
                this.count = this.count + 1
            }
        }
        this.boostedBodyParts = this.count
    }

    boostParts(creep) {
        this.result = this.lab.boostCreep(creep)
        if (this.result == ERR_NOT_IN_RANGE) {
            creep.moveTo(this.lab)
        }
    }

    shouldHeal(creep) {
        this.scanForTargets(creep)
        console.log(this.badGuys)
        if (this.badGuys.length < 1) {
            if (creep.hits < creep.hitsMax) {
                creep.memory.creepShouldHeal = true
            }
        }
        if (creep.hits == creep.hitsMax) {
            creep.memory.creepShouldHeal = false
        }
    }

    healthCheck(creep) {
        this.countBoostedParts(creep)
        this.shouldHeal(creep)
        if (creep.memory.creepShouldHeal == true) {
            creep.heal(creep)
        } else {
            if (this.boostedBodyParts < 1) {
                creep.memory.creepReturnToBase = false
            } else {
                creep.memory.creepReturnToBase = false
            }
        }
    }

    resupply(creep) {
        if (this.boostedBodyParts < 1) {
            this.boostParts(creep)
        } else {
            creep.moveTo(Game.getObjectById(creep.memory.creepSpawner.id))
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

    attack(creep, target = null) {
        this.result = creep.attack(this.badGuys[0])
    }

    scanForTargets(creep) {
        this.badGuys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 1)
        // if(this.badGuys.length < 1){
        //     this.badGuys = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 1)
        // }
    }

    run(creep) {
        this.healthCheck(creep)
        if (creep.memory.creepReturnToBase == true) {
            this.resupply(creep)
        } else {
            if (
                !creep.pos.inRangeTo(
                    new RoomPosition(25, 25, this.roomName),
                    24
                )
            ) {
                creep.moveTo(new RoomPosition(25, 25, this.roomName))
            } else {
                if (this.secondLair) {
                    if (
                        this.secondLair.pos.findInRange(FIND_HOSTILE_CREEPS, 5)
                            .length > 0
                    ) {
                        this.badGuys = this.secondLair.pos.findInRange(
                            FIND_HOSTILE_CREEPS,
                            4
                        )
                        this.result = creep.attack(this.badGuys[0])
                        if (this.result == ERR_NOT_IN_RANGE) {
                            creep.moveTo(this.badGuys[0])
                        }
                    }
                    if (creep.pos.inRangeTo(this.campPos, 0) == false) {
                        creep.moveTo(this.campPos)
                    } else {
                        this.scanForTargets(creep)
                        if (this.badGuys.length > 0) {
                            this.attack(creep)
                        }
                    }
                } else {
                    if (creep.pos.inRangeTo(this.campPos, 0) == false) {
                        creep.moveTo(this.campPos)
                    } else {
                        this.scanForTargets(creep)
                        if (this.badGuys.length > 0) {
                            this.attack(creep)
                        }
                    }
                }
            }
        }
    }
}

module.exports = classes_creeps_srcKeeperCreep
