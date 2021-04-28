class classes_creeps_keaniumCreep {
    constructor(keanium, keaniumStore, roomName, partsArray) {
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [
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
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            MOVE,
            CARRY,
        ]
        this.creepName = 'keaniumCreep[' + roomName + ']-'
        this.keanium = Game.getObjectById(keanium)
        this.keaniumStore = Game.getObjectById(keaniumStore)
        this.result = null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(this.partsArray, this.creepName + Game.time, {
                memory: {
                    creepClass: 'keaniumCreep',
                    creepRoom: this.room.name,
                    creepParts: this.partsArray,
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

    run(creep) {
        if (creep.store.getFreeCapacity(RESOURCE_KEANIUM) > 0) {
            this.result = creep.harvest(this.keanium, RESOURCE_KEANIUM)
            if (this.result == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.keanium)
            }
        } else if (this.keaniumStore.store.getFreeCapacity(RESOURCE_ENERGY) > 2000) {
            this.result = creep.transfer(this.keaniumStore, RESOURCE_KEANIUM)
            if (this.result == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.keaniumStore)
            }
        }
    }
}

module.exports = classes_creeps_keaniumCreep
