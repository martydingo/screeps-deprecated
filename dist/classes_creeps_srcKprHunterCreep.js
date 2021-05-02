// [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL]
class classes_creeps_srcKprHunterCreep {
    constructor(roomName) {
        this.roomName = roomName
        this.creepName = 'srcKprHunterCreep[' + this.roomName + ']-'
        this.partsArray = [
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
        ]

        this.room = Game.rooms[roomName]
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'srcKprHunterCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray,
                    },
                }
            )
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

    run(creep) {
        if (this.room) {
            if (creep.pos.roomName == this.room.name) {
                var closestHostileCreep = creep.pos.findClosestByPath(
                    FIND_HOSTILE_CREEPS
                )
                if (!creep.pos.inRangeTo(closestHostileCreep, 3)) {
                    if (creep.hits < creep.hitsMax) {
                        creep.heal(creep)
                    } else {
                        creep.moveTo(closestHostileCreep)
                    }
                } else {
                    if (creep.attack(closestHostileCreep) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestHostileCreep)
                    }
                }
            }
        } else {
            creep.moveTo(this.roomName)
        }
    }
}

module.exports = classes_creeps_srcKprHunterCreep
