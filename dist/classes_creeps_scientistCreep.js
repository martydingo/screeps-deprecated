class classes_creeps_scientistCreep {
    constructor(roomName, partsArray) {
        this.terminal = Game.rooms[roomName].terminal
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
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
            CARRY,
        ]
        this.creepName = 'scientistCreep[' + this.room.name + ']-'
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'scientistCreep',
                        creepRoom: this.room.name,
                        creepParts: this.partsArray,
                        creepOrigin: this.origin,
                        creepDestination: this.destination,
                    },
                }
            )
            return this.result
        }
    }

    findLabs(creep) {
        var labs = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_LAB },
        })
    }

    findFactory(creep) {}

    canSpawn(spawner) {
        if (
            spawner.spawnCreep(this.partsArray, this.creepName, {
                dryRun: true,
            }) == 0
        ) {
            return true
        } else return false
    }

    run(creep) {}
}

module.exports = classes_creeps_scientistCreep
