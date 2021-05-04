const classes_respawn_engine = require('classes_respawn_engine')
const config_e17n55_creeps_sourceCreep = require('config_e17n55_creeps_sourceCreep')
const config_e17n55_creeps_transportCreep = require('config_e17n55_creeps_transportCreep')
const config_e17n55_creeps_feederCreep = require('config_e17n55_creeps_feederCreep')
const config_e17n55_creeps_upgradeCreep = require('config_e17n55_creeps_upgradeCreep')
const config_e17n55_creeps_buildCreep = require('config_e17n55_creeps_buildCreep')

class routines_respawn_e17n55_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e17n55_creeps_sourceCreep
        this.config.transportCreep = config_e17n55_creeps_transportCreep
        this.config.feederCreep = config_e17n55_creeps_feederCreep
        this.config.buildCreep = config_e17n55_creeps_buildCreep
        this.config.upgradeCreep = config_e17n55_creeps_upgradeCreep
        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
                srcTwo: '1',
            },
            upgradeCreep: '0',
            buildCreep: '0',
            feederCreep: '3',
            transportCreep: {
                linkViaStorage: '0',
                storageViaSrcTwoContainer: '1',
                spawnerViaStorage: '1',
            },
            lootCreep: '1',
            hydrogenCreep: '0',
            claimCreep: '0',
            warriorCreep: '0',
        }
        if (Game.rooms[roomName].storage.store[RESOURCE_ENERGY] > 200000) {
            this.config.maxActive.upgradeCreep += 1
        }
    }
}

module.exports = routines_respawn_e17n55_routine