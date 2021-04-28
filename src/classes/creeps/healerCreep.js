utils_pathfinding_avoidHostileCreeps = require('utils_pathfinding_avoidHostileCreeps')
utils_pathfinding_fleeHostileCreeps = require('utils_pathfinding_fleeHostileCreeps')

class classes_creeps_healerCreep {
    constructor(roomName, partsArray) {
        this.room = Game.rooms[roomName]
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
            HEAL,
            HEAL,
            HEAL,
            HEAL,
            HEAL,
            HEAL,
            HEAL,
        ]
        this.creepName = 'healerCreep[' + this.roomName + ']-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.targetCreeps = this.targetCreeps
        this.targetCreep = this.targetCreep
        this.result = null
        this.badGuys = this.badGuys
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'healerCreep',
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

    heal(creep, targetCreep) {
        if (creep.pos.inRangeTo(targetCreep, 1)) {
            this.result = creep.heal(targetCreep)
        } else {
            creep.moveTo(targetCreep)
            if (creep.pos.inRangeTo(targetCreep, 3)) {
                this.result = creep.rangedHeal(targetCreep)
            }
        }
    }

    follow(creep, targetCreep) {
        creep.moveTo(
            utils_pathfinding_avoidHostileCreeps.findPath(
                creep,
                targetCreep.pos
            )
        )
    }

    run(creep) {
        this.badGuys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 4)
        this.targetCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'snipeCreep'
        )
        if (this.targetCreeps.length > 0) {
            this.targetCreep = this.targetCreeps[0]

            if (creep.pos.inRangeTo(this.targetCreep.pos, 1) == false) {
                this.follow(creep, this.targetCreep)
                this.heal(creep, this.targetCreep)
            } else {
                if (this.badGuys.length > 0) {
                    creep.moveTo(
                        utils_pathfinding_fleeHostileCreeps.findPath(
                            creep,
                            targetCreep.pos
                        )
                    )
                    this.heal(creep, this.targetCreep)
                } else {
                    this.heal(creep, this.targetCreep)
                }
            }
        }
    }
}

module.exports = classes_creeps_healerCreep
