class classes_creeps_factoryWorkerCreep {
    constructor(roomName) {
        this.room = Game.rooms[roomName]
        this.project = 'condensate'
        this.terminal = Game.rooms[roomName].terminal
        this.factory = this.room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_FACTORY },
        })[0]
        this.terminal = this.room.terminal
        this.partsArray = [
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
        this.creepName = 'factoryWorkerCreep[' + this.room.name + ']-'
    }

    spawnCreep(spawner) {
        if (this.canSpawn(spawner) == true) {
            this.result = spawner.spawnCreep(
                this.partsArray,
                this.creepName + Game.time,
                {
                    memory: {
                        creepClass: 'factoryWorkerCreep',
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
        if (this.project == 'condensate') {
            this.condensateRoutine(creep)
        }
    }

    condensateRoutine(creep) {
        if (
            this.factory.store[RESOURCE_CONDENSATE] > 0 ||
            creep.store[RESOURCE_CONDENSATE] > 1
        ) {
            if (creep.store[RESOURCE_CONDENSATE] == 0) {
                var result = creep.withdraw(this.factory, RESOURCE_CONDENSATE)
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.factory)
                }
            } else {
                var result = creep.transfer(this.terminal, RESOURCE_CONDENSATE)
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.terminal)
                }
            }
        } else {
            if (this.factory.store[RESOURCE_KEANIUM_BAR] < 20) {
                this.keaniumBarRoutine(creep)
            } else {
                if (this.factory.store[RESOURCE_MIST] < 100) {
                    this.mistRoutine(creep)
                } else {
                    if (this.factory.store[RESOURCE_ENERGY] >= 40) {
                        var result = this.factory.produce(RESOURCE_CONDENSATE)
                    }
                }
            }
        }
    }

    mistRoutine(creep) {
        if (
            this.terminal.store[RESOURCE_MIST] >= 100 ||
            creep.store[RESOURCE_MIST] > 1
        ) {
            if (creep.store[RESOURCE_MIST] == 0) {
                var result = creep.withdraw(this.terminal, RESOURCE_MIST)
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.terminal)
                }
            } else {
                var result = creep.transfer(this.factory, RESOURCE_MIST)
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.factory)
                }
            }
        }
    }

    keaniumBarRoutine(creep) {
        if (this.terminal.store[RESOURCE_KEANIUM_BAR] < 20) {
            if (this.factory.store[RESOURCE_KEANIUM] >= 500) {
                if (this.factory.store[RESOURCE_ENERGY] >= 200) {
                    var result = this.factory.produce(RESOURCE_KEANIUM_BAR)
                }
            } else {
                if (
                    creep.store[RESOURCE_KEANIUM] <
                    creep.store.getFreeCapacity(RESOURCE_KEANIUM)
                ) {
                    var result = creep.withdraw(this.terminal, RESOURCE_KEANIUM)
                    if (result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(this.terminal)
                    }
                } else {
                    var result = creep.transfer(this.factory, RESOURCE_KEANIUM)
                    if (result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(this.factory)
                    }
                }
            }
        } else {
            var result = creep.withdraw(this.terminal, RESOURCE_KEANIUM_BAR)
            if (result == ERR_NOT_IN_RANGE) {
                creep.moveTo(this.terminal)
            }
            if (result == OK) {
                var result = creep.transfer(this.factory, RESOURCE_KEANIUM_BAR)
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(this.factory)
                }
            }
        }
    }
}

module.exports = classes_creeps_factoryWorkerCreep
