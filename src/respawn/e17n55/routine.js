const classes_respawn_prioritization = require('classes_respawn_prioritization')
const routines_e17n55_buildCreeps_buildCreep = require('routines_e17n55_buildCreeps_buildCreep')
const routines_e17n55_feederCreeps_feederCreep = require('routines_e17n55_feederCreeps_feederCreep')
const routines_e17n55_hydrogenCreeps_hydrogenCreep = require('routines_e17n55_hydrogenCreeps_hydrogenCreep')
const routines_e17n55_lootCreeps_lootCreep = require('routines_e17n55_lootCreeps_lootCreep')
const routines_e17n55_sourceCreeps_srcOne = require('routines_e17n55_sourceCreeps_srcOne')
const routines_e17n55_sourceCreeps_srcTwo = require('routines_e17n55_sourceCreeps_srcTwo')
const routines_e17n55_transportCreeps_labViaStorage = require('routines_e17n55_transportCreeps_labViaStorage')
const routines_e17n55_transportCreeps_labViaUtriumContainer = require('routines_e17n55_transportCreeps_labViaUtriumContainer')
const routines_e17n55_transportCreeps_linkViaStorage = require('routines_e17n55_transportCreeps_linkViaStorage')
const routines_e17n55_transportCreeps_spawnerViaStorage = require('routines_e17n55_transportCreeps_spawnerViaStorage')
const routines_e17n55_transportCreeps_storageViaSrcTwoContainer = require('routines_e17n55_transportCreeps_storageViaSrcTwoContainer')
const routines_e17n55_transportCreeps_storageViaUtriumContainer = require('routines_e17n55_transportCreeps_storageViaUtriumContainer')
const routines_e17n55_upgradeCreeps_upgradeCreep = require('routines_e17n55_upgradeCreeps_upgradeCreep')

class respawn_e17n55_routine extends classes_respawn_prioritization {
    constructor() {
        super()
        this.priorityMatrix = {
            0: 'TEST',
        }
    }

    respawn() {
        for (var creepClass in this.priorityMatrix) {
            for (var creep in this.priorityMatrix[creepClass]) {
                if (
                    this.priorityMatrix[creepClass][creep] == this.priorityLevel
                ) {
                    this.respawnRoutines[creepClass][creep]()
                } else {
                    this.priorityMatrix += 1
                }
            }
        }
    }
}

module.exports = respawn_e17n55_routine
