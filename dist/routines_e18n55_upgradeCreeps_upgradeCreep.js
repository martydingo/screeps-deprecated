const config_e18n55_respawn = require('config_e18n55_respawn')
const config_e18n55_sources = require('config_e18n55_sources')
const classes_creeps_upgradeCreep = require('classes_creeps_upgradeCreep')

var routines_e18n55_upgradeCreeps_srcOne = {
    run: function () {
        const room = 'E18N55'
        const energySource = config_e18n55_sources.srcOne
        const roomController = '5bbcade89099fc012e6381e1'
        const spawn = Game.spawns['E17N55SPA1']
        var upgradeCreeps = _.filter(
            Game.creeps,
            (creep) => creep.memory.creepClass == 'upgradeCreep' && creep.memory.creepRoom == 'E18N55'
        )
        var upgradeCreep = new classes_creeps_upgradeCreep(null, energySource, roomController, room)

        if (!spawn.memory.spawnBlocked) {
            this.creepWatch(spawn, upgradeCreeps, upgradeCreep)
        }
        this.creepAct(upgradeCreeps, upgradeCreep)
    },

    creepWatch: function (spawn, upgradeCreeps, upgradeCreep) {
        if (upgradeCreeps.length < config_e18n55_respawn.maxActive.upgradeCreep) {
            upgradeCreep.spawnCreep(spawn)
        }
    },

    creepAct: function (upgradeCreeps, upgradeCreep) {
        for (var creep in upgradeCreeps) {
            upgradeCreep.run(upgradeCreeps[creep])
        }
    },
}

module.exports = routines_e18n55_upgradeCreeps_srcOne
