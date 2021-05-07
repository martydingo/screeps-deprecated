const classes_respawn_engine = require('classes_respawn_engine')
const config_e15n53_creeps_sourceCreep = require('config_e15n53_creeps_sourceCreep')
const config_e15n53_creeps_transportCreep = require('config_e15n53_creeps_transportCreep')
const config_e15n53_creeps_feederCreep = require('config_e15n53_creeps_feederCreep')
const config_e15n53_creeps_upgradeCreep = require('config_e15n53_creeps_upgradeCreep')
const config_e15n53_creeps_buildCreep = require('config_e15n53_creeps_buildCreep')

class routines_respawn_e15n53_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e15n53_creeps_sourceCreep
        this.config.transportCreep = config_e15n53_creeps_transportCreep
        this.config.feederCreep = config_e15n53_creeps_feederCreep
        this.config.buildCreep = config_e15n53_creeps_buildCreep
        this.config.upgradeCreep = config_e15n53_creeps_upgradeCreep
        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
            },
            upgradeCreep: '1',
            buildCreep: '1',
            feederCreep: '1',
            lootCreep: '0',
        }
        if (Game.rooms[roomName].storage.store[RESOURCE_ENERGY] > 200000) {
            this.config.maxActive.upgradeCreep += 1
        }
        if (
            Game.rooms['E15N53'].find(FIND_CONSTRUCTION_SITES, {
                filter: (Site) => Site.owner.username == 'Marty',
            }).length > 0
        ) {
            this.config.maxActive.buildCreep += 1
        }
    }
}

module.exports = routines_respawn_e15n53_routine
