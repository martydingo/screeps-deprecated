const classes_respawn_engine = require('classes_respawn_engine')
const config_e16n53_creeps_sourceCreep = require('config_e16n53_creeps_sourceCreep')
const config_e16n53_creeps_transportCreep = require('config_e16n53_creeps_transportCreep')
const config_e16n53_creeps_feederCreep = require('config_e16n53_creeps_feederCreep')
const config_e16n53_creeps_upgradeCreep = require('config_e16n53_creeps_upgradeCreep')
const config_e16n53_creeps_buildCreep = require('config_e16n53_creeps_buildCreep')
const config_e16n53_creeps_claimCreep = require('config_e16n53_creeps_claimCreep')
const config_e16n53_creeps_warriorCreep = require('config_e16n53_creeps_warriorCreep')

class routines_respawn_e16n53_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e16n53_creeps_sourceCreep
        this.config.transportCreep = config_e16n53_creeps_transportCreep
        this.config.claimCreep = config_e16n53_creeps_claimCreep
        this.config.buildCreep = config_e16n53_creeps_buildCreep
        this.config.warriorCreep = config_e16n53_creeps_warriorCreep
        this.config.feederCreep = config_e16n53_creeps_feederCreep
        this.config.upgradeCreep = config_e16n53_creeps_upgradeCreep
        this.config.priority = {
            warriorCreep: '1',
            claimCreep: '2',
            sourceCreep: '3',
            transportCreep: '4',
            lootCreep: '5',
            buildCreep: '6',
            feederCreep: '7',
            upgradeCreep: '8',
            srcKprHunterCreep: '9',
            hydrogenCreep: '10',
        }
        this.config.maxActive = {
            warriorCreep: '1',
            sourceCreep: {
                srcOne: '1',
                srcTwo: '1',
            },
            upgradeCreep: '0',
            buildCreep: '0',
            feederCreep: '0',
            lootCreep: '0',
            claimCreep: '1',
            transportCreep: {
                storageViaSrcOneContainer: '1',
                storageViaSrcTwoContainer: '1',
            },
        }

        // if (Game.rooms[roomName].storage.store[RESOURCE_ENERGY] > 200000) {
        //     this.config.maxActive.upgradeCreep += 1
        // }
        if (Game.rooms[roomName]) {
            if (
                Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {
                    filter: (Site) => Site.owner.username == 'Marty',
                }).length > 0
            ) {
                this.config.maxActive.buildCreep += 1
            }
        }
    }
}

module.exports = routines_respawn_e16n53_routine
