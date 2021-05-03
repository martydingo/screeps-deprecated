const classes_respawn_template = require('classes_respawn_template')
const config_e16n55_creeps_sourceCreep = require('config_e16n55_creeps_sourceCreep')
const config_e16n55_creeps_transportCreep = require('config_e16n55_creeps_transportCreep')
const config_e16n55_creeps_buildCreep = require('config_e16n55_creeps_buildCreep')

class respawn_e16n55_routine extends classes_respawn_template {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e16n55_creeps_sourceCreep
        this.config.transportCreep = config_e16n55_creeps_transportCreep
        this.config.buildCreep = config_e16n55_creeps_buildCreep
        if (!Memory.e16n55.healthcheck.invadersPresent) {
            this.config.maxActive = {
                sourceCreep: {
                    srcOne: '1',
                    srcTwo: '1',
                    srcThree: '0',
                },
                buildCreep: '0',
                transportCreep: {
                    storageViaSrcOneContainer: '1',
                    storageViaSrcTwoContainer: '1',
                },
                lootCreep: '1',
                srcKprHunterCreep: '1',
            }
        } else {
            this.config.maxActive = {
                sourceCreep: {
                    srcOne: '0',
                    srcTwo: '0',
                    srcThree: '0',
                },
                buildCreep: '0',
                transportCreep: {
                    storageViaSrcOneContainer: '0',
                    storageViaSrcTwoContainer: '0',
                },
                lootCreep: '0',
                srcKprHunterCreep: '0',
            }
        }
    }
}

module.exports = respawn_e16n55_routine
