const classes_respawn_template = require('classes_respawn_template')
const config_e18n55_creeps_claimCreep = require('config_e18n55_creeps_claimCreep')
const config_e18n55_creeps_sourceCreep = require('config_e18n55_creeps_sourceCreep')
const config_e18n55_creeps_transportCreep = require('config_e18n55_creeps_transportCreep')
const config_e18n55_creeps_buildCreep = require('config_e18n55_creeps_buildCreep')

class respawn_e18n55_routine extends classes_respawn_template {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.claimCreep = config_e18n55_creeps_claimCreep
        this.config.sourceCreep = config_e18n55_creeps_sourceCreep
        this.config.transportCreep = config_e18n55_creeps_transportCreep
        this.config.buildCreep = config_e18n55_creeps_buildCreep
        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
            },
            buildCreep: '0',
            transportCreep: {
                storageViaSrcOneContainer: '1',
            },
            lootCreep: '0',
            hydrogenCreep: '0',
            warriorCreep: '0',
            claimCreep: '1',
        }
    }
}

module.exports = respawn_e18n55_routine
