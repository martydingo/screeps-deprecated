const classes_respawn_template = require('classes_respawn_template')
// const config_e16n55_creeps_sourceCreep = require('config_e16n55_creeps_sourceCreep')
// const config_e16n55_creeps_transportCreep = require('config_e16n55_creeps_transportCreep')
// const config_e16n55_creeps_buildCreep = require('config_e16n55_creeps_buildCreep')

class respawn_e16n55_routine extends classes_respawn_template {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        // this.config.sourceCreep = config_e16n55_creeps_sourceCreep
        // this.config.transportCreep = config_e16n55_creeps_transportCreep
        // this.config.buildCreep = config_e16n55_creeps_buildCreep
        this.config.maxActive = {
            // sourceCreep: {
            //     srcOne: '0',
            // },
            // buildCreep: '0',
            // transportCreep: {
            //     storageViaSrcOneContainer: '0',
            // },
            // lootCreep: '0',
            srcKprHunterCreep: '1',
        }
    }
}

module.exports = respawn_e16n55_routine
