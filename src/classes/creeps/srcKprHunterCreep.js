// [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL]
const config_e16n55_sources = require('config_e16n55_sources')

class classes_creeps_srcKprHunterCreep {
    constructor(roomName) {
        this.sources = config_e16n55_sources
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
                if (
                    creep.room.find(FIND_HOSTILE_CREEPS, {
                        filter: (Creep) =>
                            'Keeper' + this.sources.srcOne.lair == Creep.name ||
                            'Keeper' + this.sources.srcTwo.lair == Creep.name,
                    }).length > 0
                ) {
                    var closestHostileCreep = creep.pos.findClosestByPath(
                        FIND_HOSTILE_CREEPS,
                        {
                            filter: (Creep) =>
                                'Keeper' + this.sources.srcOne.lair ==
                                    Creep.name ||
                                'Keeper' + this.sources.srcTwo.lair ==
                                    Creep.name,
                        }
                    )
                    if (!creep.pos.inRangeTo(closestHostileCreep, 3)) {
                        if (creep.hits < creep.hitsMax) {
                            creep.heal(creep)
                        } else {
                            creep.moveTo(closestHostileCreep)
                        }
                    } else {
                        if (
                            creep.attack(closestHostileCreep) ==
                            ERR_NOT_IN_RANGE
                        ) {
                            creep.moveTo(closestHostileCreep)
                        }
                    }
                } else {
                    if (creep.hits < creep.hitsMax) {
                        var spawningLairs = creep.room.find(
                            FIND_HOSTILE_STRUCTURES,
                            {
                                filter: (Structure) =>
                                    (Structure.structureType ==
                                        STRUCTURE_KEEPER_LAIR &&
                                        Structure.id ==
                                            this.sources.srcOne.lair) ||
                                    Structure.id == this.sources.srcTwo.lair,
                            }
                        )
                        if (
                            creep.pos.findInRange(FIND_HOSTILE_CREEPS, 4)
                                .length < 1
                        ) {
                            if (
                                spawningLairs[0].ticksToSpawn <
                                    spawningLairs[1].ticksToSpawn ||
                                spawningLairs[0].ticksToSpawn == null
                            ) {
                                creep.moveTo(spawningLairs[0])
                                creep.heal(creep)
                            } else {
                                creep.moveTo(spawningLairs[1])
                                creep.heal(creep)
                            }
                        }
                    } else {
                        var spawningLairs = creep.room.find(
                            FIND_HOSTILE_STRUCTURES,
                            {
                                filter: (Structure) =>
                                    (Structure.structureType ==
                                        STRUCTURE_KEEPER_LAIR &&
                                        Structure.id ==
                                            this.sources.srcOne.lair) ||
                                    Structure.id == this.sources.srcTwo.lair,
                            }
                        )
                        if (
                            spawningLairs[0].ticksToSpawn <
                                spawningLairs[1].ticksToSpawn ||
                            spawningLairs[0].ticksToSpawn == null
                        ) {
                            creep.moveTo(
                                new RoomPosition(36, 37, this.roomName)
                            )
                        } else {
                            creep.moveTo(
                                new RoomPosition(19, 41, this.roomName)
                            )
                        }
                    }
                }
            } else {
                creep.moveTo(new RoomPosition(25, 25, this.roomName))
            }
        } else {
            creep.moveTo(new RoomPosition(25, 25, this.roomName))
        }
    }
}

module.exports = classes_creeps_srcKprHunterCreep
