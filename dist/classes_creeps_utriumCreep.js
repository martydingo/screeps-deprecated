class classes_creeps_utriumCreep {
    constructor(
        utrium,
        utriumStore,
        roomName,
        holdingPos,
        keeperLair,
        partsArray
    ) {
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.hostileCreeps = this.hostileCreeps
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
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
            MOVE,
            CARRY,
        ]
        this.creepName = 'utriumCreep[' + roomName + ']-'
        this.utrium = Game.getObjectById(utrium)
        this.utriumStore = Game.getObjectById(utriumStore)
        this.result = null
        this.keeperLair = Game.getObjectById(keeperLair) || null
        this.holdingPos = holdingPos // 1, 33
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'utriumCreep',
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
        if (this.keeperLair) {
            if (creep.store.getFreeCapacity(RESOURCE_UTRIUM) > 0) {
                this.hostileCreeps = this.room.find(FIND_HOSTILE_CREEPS)
                //    if(this.hostileCreeps.length < 1){
                if (this.keeperLair.ticksToSpawn > 30) {
                    this.result = creep.harvest(this.utrium)
                    if (this.result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(this.utrium)
                    }
                } else {
                    creep.moveTo(this.holdingPos)
                }
                //} else {
                //    this.result = creep.moveTo(this.holdingPos)
                //}
            } else {
                this.result = creep.transfer(this.utriumStore, RESOURCE_UTRIUM)
                if (this.result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.utriumStore)
                }
            }
        } else {
            creep.moveTo(new RoomPosition(25, 25, this.roomName))
        }
    }
}

module.exports = classes_creeps_utriumCreep
