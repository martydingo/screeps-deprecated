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
        this.config.sourceCreep = config_e17n52_creeps_sourceCreep
        this.config.transportCreep = config_e17n52_creeps_transportCreep
        this.config.feederCreep = config_e17n52_creeps_feederCreep
        this.config.claimCreep = config_e17n52_creeps_claimCreep
        this.config.buildCreep = config_e17n52_creeps_buildCreep
        this.config.warriorCreep = config_e17n52_creeps_warriorCreep

        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
            },
            transportCreep: {
                storageViaSrcOneContainer: '1',
            },
            lootCreep: '0',
            claimCreep: '1',
            warriorCreep: '0',
            buildCreep: '0',
        }
        if (Game.rooms['E17N52']) {
            if (
                Game.rooms['E17N52'].find(FIND_CONSTRUCTION_SITES, {
                    filter: (Site) => Site.owner.username == 'Marty',
                }).length > 0
            ) {
                this.config.maxActive.buildCreep += 1
            }
        }
    }
}

module.exports = routines_respawn_e17n52_routine
