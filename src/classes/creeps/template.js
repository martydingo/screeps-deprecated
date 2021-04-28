class classes_creeps_templateCreep {
    constructor(roomName, partsArray, targetRoom) {
        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [WORK, MOVE, CARRY]
        this.targetRoom = Game.rooms[targetRoom]
        this.creepName = 'templateCreep[' + this.room.name + ']-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.result = null
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'templateCreep',
                        creepRoom: this.room.name,
                        targetRoom: this.targetRoom.name,
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

    run(creep) {}
}

module.exports = classes_creeps_templateCreep
