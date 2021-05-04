// Respawn Prioritization Base
const classes_creeps_sourceCreep = require('classes_creeps_sourceCreep')
const classes_creeps_transportCreep = require('classes_creeps_transportCreep')
const classes_creeps_lootCreep = require('classes_creeps_lootCreep')
const classes_creeps_feederCreep = require('classes_creeps_feederCreep')
const classes_creeps_claimCreep = require('classes_creeps_claimCreep')
const classes_creeps_warriorCreep = require('classes_creeps_warriorCreep')
const classes_creeps_buildCreep = require('classes_creeps_buildCreep')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')
const classes_creeps_srcKprHunterCreep = require('classes_creeps_srcKprHunterCreep')

class classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        this.spawnRoom = spawnRoom || null
        this.roomName = roomName
        this.room = Game.rooms[roomName]
        this.config = {
            priority: {
                srcKprHunterCreep: '1',
                sourceCreep: '2',
                feederCreep: '3',
                transportCreep: '4',
                lootCreep: '5',
                hydrogenCreep: '6',
                claimCreep: '7',
                warriorCreep: '8',
                buildCreep: '9',
                upgradeCreep: '10',
            },
        }
    }
    returnSpawn(spawnRoom) {
        for (var spawn in Game.spawns) {
            if (Game.spawns[spawn].pos.roomName == spawnRoom) {
                if (!Game.spawns[spawn].spawning) {
                    return Game.spawns[spawn]
                } else {
                    //pass
                }
            }
        }
    }
    getActiveClassCount(creepClass, creepName, room) {
        if (creepClass == 'transportCreep') {
            return _.filter(
                Game.creeps,
                (creep) =>
                    creep.memory.creepRoom == room &&
                    creep.memory.creepClass == 'transportCreep' &&
                    creep.memory.creepOrigin.id ==
                        this.config.transportCreep[creepName].creepOrigin.id &&
                    creep.memory.creepDestination.id ==
                        this.config.transportCreep[creepName].creepDestination
                            .id
            ).length
        }
        if (creepClass == 'sourceCreep') {
            var creepSource = this.config.sourceCreep[creepName].creepSource
            return _.filter(
                Game.creeps,
                (creep) =>
                    creep.memory.creepRoom == room &&
                    creep.memory.creepClass == creepClass &&
                    creep.memory.creepSource == creepSource
            ).length
        }
        if (
            creepClass == 'upgradeCreep' ||
            creepClass == 'buildCreep' ||
            creepClass == 'feederCreep' ||
            creepClass == 'lootCreep' ||
            creepClass == 'hydrogenCreep' ||
            creepClass == 'warriorCreep' ||
            creepClass == 'claimCreep'
        ) {
            return _.filter(
                Game.creeps,
                (creep) =>
                    creep.memory.creepRoom == room &&
                    creep.memory.creepClass == creepClass
            ).length
        }
        if (creepClass == 'srcKprHunterCreep') {
            return _.filter(
                Game.creeps,
                (creep) =>
                    creep.memory.creepRoom == room &&
                    creep.memory.creepClass == creepClass &&
                    (creep.ticksToLive > 300 || creep.ticksToLive == null)
            ).length
        }
    }

    spawnCreep(creepClass, creepName, spawner) {
        if (creepClass == 'sourceCreep') {
            var sourceCreep = new classes_creeps_sourceCreep(
                this.config.sourceCreep[creepName].creepStorage,
                this.config.sourceCreep[creepName].creepSource,
                this.roomName,
                this.config.sourceCreep[creepName].creepParts
            )
            sourceCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'upgradeCreep') {
            var upgradeCreep = new classes_creeps_upgradeCreep(
                this.config.upgradeCreep.creepStorage,
                this.config.upgradeCreep.creepSource,
                this.config.upgradeCreep.creepController,
                this.roomName,
                this.config.upgradeCreep.creepUpgradeFromPOS,
                this.config.upgradeCreep.creepContainer,
                this.config.upgradeCreep.creepParts
            )
            if (this.roomName) {
                upgradeCreep.spawnCreep(spawner)
            } else {
                console.log('error')
            }
            return true
        }
        if (creepClass == 'buildCreep') {
            var buildCreep = new classes_creeps_buildCreep(
                this.config.buildCreep.creepStorage,
                this.config.buildCreep.creepSource,
                this.roomName
            )
            buildCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'transportCreep') {
            var transportCreep = new classes_creeps_transportCreep(
                this.config.transportCreep[creepName].creepOrigin.id,
                this.config.transportCreep[creepName].creepDestination.id,
                this.roomName,
                this.config.transportCreep[creepName].creepParts
            )
            transportCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'feederCreep') {
            var feederCreep = new classes_creeps_feederCreep(
                this.config.feederCreep.creepStorage.id,
                null,
                null,
                this.roomName
            )
            feederCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'lootCreep') {
            var lootCreep = new classes_creeps_lootCreep(this.roomName)
            lootCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'srcKprHunterCreep') {
            var srcKprHunterCreep = new classes_creeps_srcKprHunterCreep(
                this.roomName
            )
            srcKprHunterCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'claimCreep') {
            var claimCreep = new classes_creeps_claimCreep(
                this.roomName,
                this.config.claimCreep.creepReserveController
            )
            claimCreep.spawnCreep(spawner)
            return true
        }
        if (creepClass == 'warriorCreep') {
            var warriorCreep = new classes_creeps_warriorCreep(
                this.roomName,
                this.config.warriorCreep.creepParts
            )
            warriorCreep.spawnCreep(spawner)
            return true
        }
        return false
    }

    healthCheck() {
        var priorityIndex = 1
        while (priorityIndex <= Object.keys(this.config.priority).length) {
            for (var creepClass in this.config.priority) {
                if (this.config.priority[creepClass] == priorityIndex) {
                    if (
                        !(typeof this.config.maxActive[creepClass] === String)
                    ) {
                        for (var creepName in this.config.maxActive[
                            creepClass
                        ]) {
                            var maxAlive = this.config.maxActive[creepClass][
                                creepName
                            ]
                            var currentAlive = this.getActiveClassCount(
                                creepClass,
                                creepName,
                                this.roomName
                            )
                            if (currentAlive < maxAlive) {
                                if (!this.spawnRoom) {
                                    var spawner = this.returnSpawn(
                                        this.roomName
                                    )
                                } else {
                                    var spawner = this.returnSpawn(
                                        this.spawnRoom
                                    )
                                }
                                if (spawner) {
                                    console.log(
                                        'Spawning ' +
                                            creepClass +
                                            ' - ' +
                                            creepName +
                                            ' for room ' +
                                            this.roomName
                                    )
                                    this.spawnCreep(
                                        creepClass,
                                        creepName,
                                        spawner
                                    )
                                    break
                                }
                                break
                            }
                        }
                    } else {
                        var maxAlive = this.config.maxActive[creepClass]
                        var currentAlive = this.getActiveClassCount(
                            creepClass,
                            null,
                            this.roomName
                        )
                        if (currentAlive < maxAlive) {
                            if (!this.spawnRoom) {
                                var spawner = this.returnSpawn(this.roomName)
                            } else {
                                var spawner = this.returnSpawn(this.spawnRoom)
                            }
                            console.log(
                                'Spawning ' + creepClass + ' at ' + spawner.name
                            )
                            this.spawnCreep(creepClass, null, spawner)
                            break
                        }
                    }
                }
            }
            priorityIndex += 1
        }
    }
}

module.exports = classes_respawn_engine
