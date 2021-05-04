const classes_respawn_engine = require('classes_respawn_engine')
const config_e16n55_creeps_sourceCreep = require('config_e16n55_creeps_sourceCreep')
const config_e16n55_creeps_transportCreep = require('config_e16n55_creeps_transportCreep')
const config_e16n55_creeps_buildCreep = require('config_e16n55_creeps_buildCreep')

class routines_respawn_e16n55_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e16n55_creeps_sourceCreep
        this.config.transportCreep = config_e16n55_creeps_transportCreep
        this.config.buildCreep = config_e16n55_creeps_buildCreep
        if (!Memory.e16n55.healthcheck.invadersPresent) {
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

module.exports = routines_respawn_e16n55_routine
