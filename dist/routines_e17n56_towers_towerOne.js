classes_structures_tower = require('classes_structures_tower')

var routines_e17n56_towers_towerOne = {
    run: function () {
        const room = 'E17N56'
        const towerObj = Game.getObjectById('606b69aa70ed373287aa7f80')
        var tower = new classes_structures_tower(towerObj)
        tower.run()
    },
}

module.exports = routines_e17n56_towers_towerOne
