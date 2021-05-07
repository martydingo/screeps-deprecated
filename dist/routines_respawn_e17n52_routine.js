const classes_respawn_engine = require('classes_respawn_engine')
const config_e17n52_creeps_sourceCreep = require('config_e17n52_creeps_sourceCreep')
const config_e17n52_creeps_transportCreep = require('config_e17n52_creeps_transportCreep')
const config_e17n52_creeps_feederCreep = require('config_e17n52_creeps_feederCreep')
const config_e17n52_creeps_claimCreep = require('config_e17n52_creeps_claimCreep')
const config_e17n52_creeps_buildCreep = require('config_e17n52_creeps_buildCreep')
const config_e17n52_creeps_warriorCreep = require('config_e17n52_creeps_warriorCreep')

class routines_respawn_e17n52_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.transportCreep = config_e17n52_creeps_transportCreep
        this.config.sourceCreep = config_e17n52_creeps_sourceCreep
        this.config.feederCreep = config_e17n52_creeps_feederCreep
        this.config.claimCreep = config_e17n52_creeps_claimCreep
        this.config.buildCreep = config_e17n52_creeps_buildCreep
        this.config.warriorCreep = config_e17n52_creeps_warriorCreep

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
            sourceCreep: {
                srcOne: '1',
            },
            transportCreep: {
                storageViaSrcOneContainer: '1',
            },
            lootCreep: '1',
            claimCreep: '1',
            warriorCreep: '1',
            buildCreep: '0',
        }

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

module.exports = routines_respawn_e17n52_routine
