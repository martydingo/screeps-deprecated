const classes_respawn_template = require('classes_respawn_template')
const config_e17n55_creeps_sourceCreep = require('config_e17n55_creeps_sourceCreep')
const config_e17n55_creeps_transportCreep = require('config_e17n55_creeps_transportCreep')
const config_e17n55_creeps_feederCreep = require('config_e17n55_creeps_feederCreep')

class respawn_e17n55_routine extends classes_respawn_template {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e17n55_creeps_sourceCreep
        this.config.transportCreep = config_e17n55_creeps_transportCreep
        this.config.feederCreep = config_e17n55_creeps_feederCreep
        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
                srcTwo: '1',
            },
            upgradeCreep: '0',
            buildCreep: '0',
            feederCreep: '2',
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
    }
}

module.exports = respawn_e17n55_routine
