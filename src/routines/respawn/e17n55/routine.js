const classes_respawn_engine = require('classes_respawn_engine')
const config_e17n55_creeps_sourceCreep = require('config_e17n55_creeps_sourceCreep')
const config_e17n55_creeps_transportCreep = require('config_e17n55_creeps_transportCreep')
const config_e17n55_creeps_feederCreep = require('config_e17n55_creeps_feederCreep')
const config_e17n55_creeps_upgradeCreep = require('config_e17n55_creeps_upgradeCreep')
const config_e17n55_creeps_buildCreep = require('config_e17n55_creeps_buildCreep')
const config_e17n55_creeps_hydrogenCreep = require('config_e17n55_creeps_hydrogenCreep')

class routines_respawn_e17n55_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)
        this.config.sourceCreep = config_e17n55_creeps_sourceCreep
        this.config.transportCreep = config_e17n55_creeps_transportCreep
        this.config.feederCreep = config_e17n55_creeps_feederCreep
        this.config.buildCreep = config_e17n55_creeps_buildCreep
        this.config.upgradeCreep = config_e17n55_creeps_upgradeCreep
        this.config.hydrogenCreep = config_e17n55_creeps_hydrogenCreep
        this.config.maxActive = {
            sourceCreep: {
                srcOne: '1',
                srcTwo: '1',
            },
            upgradeCreep: '0',
            buildCreep: '0',
            feederCreep: '3',
            transportCreep: {
                linkViaStorage: '1',
                storageViaSrcTwoContainer: '1',
                spawnerViaStorage: '1',
                terminalViaLink: '0',
                factoryViaLink: '0',
            },
            lootCreep: '1',
            hydrogenCreep: '0',
            claimCreep: '0',
            warriorCreep: '0',
        }
        if (Game.rooms[roomName].storage.store[RESOURCE_ENERGY] > 200000) {
            this.config.maxActive.upgradeCreep += 1
        }
        if (Game.rooms[roomName].terminal.store[RESOURCE_HYDROGEN] < 10000) {
            if (
                Game.getObjectById('5bbcb36440062e4259e94363').mineralAmount > 0
            ) {
                this.config.maxActive.hydrogenCreep += 1
            }
        }
        if (Game.rooms[roomName].terminal.store[RESOURCE_ENERGY] < 20000) {
            this.config.maxActive.transportCreep.terminalViaLink += 1
        }
        if (
            Game.getObjectById('608ca2c5b7552f13fad1e4b0').store[
                RESOURCE_ENERGY
            ] < 600
        ) {
            this.config.maxActive.transportCreep.factoryViaLink += 1
        }
        if (
            Game.rooms['E17N55'].find(FIND_CONSTRUCTION_SITES, {
                filter: (Site) => Site.owner.username == 'Marty',
            }).length > 0
        ) {
            this.config.maxActive.buildCreep += 1
        }
    }
}

module.exports = routines_respawn_e17n55_routine
