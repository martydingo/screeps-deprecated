class classes_creeps_scoutCreep {
    constructor(roomName, partsArray, targetPos) {
        this.room = Game.rooms[roomName]
        this.roomName = roomName
        this.partsArray = partsArray || [WORK, MOVE, CARRY]
        this.targetPos = targetPos
        this.creepName = 'scoutCreep[' + roomName + ']-'
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
                        creepClass: 'scoutCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray,
                        creepTargetPos: this.targetPos,
                        creepInPosition: false,
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
        if (creep.pos.getRangeTo(this.targetPos) > 0) {
            creep.moveTo(this.targetPos)
        } else creep.memory.creepInPosition = true
    }
}

module.exports = classes_creeps_scoutCreep
