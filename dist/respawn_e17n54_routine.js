const classes_respawn_template = require('classes_respawn_template')
const config_e17n54_creeps_sourceCreep = require('config_e17n54_creeps_sourceCreep')
const config_e17n54_creeps_transportCreep = require('config_e17n54_creeps_transportCreep')
const config_e17n54_creeps_feederCreep = require('config_e17n54_creeps_feederCreep')
const config_e17n54_creeps_claimCreep = require('config_e17n54_creeps_claimCreep')

class respawn_e17n54_routine extends classes_respawn_template {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e17n54_creeps_sourceCreep
        this.config.transportCreep = config_e17n54_creeps_transportCreep
        this.config.feederCreep = config_e17n54_creeps_feederCreep
        this.config.claimCreep = config_e17n54_creeps_claimCreep

        this.config.maxActive = {
            sourceCreep: {
                srcOne: '0',
            },
            transportCreep: {
                storageViaSrcOneContainer: '0',
            },
            lootCreep: '0',
            claimCreep: '0',
            warriorCreep: '1',
        }
    }
}

module.exports = respawn_e17n54_routine
