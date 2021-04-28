classes_structures_tower = require('classes_structures_tower')

var routines_e17n55_towers_towerOne = {
    run: function () {
        const room = 'E17N55'
        const towerObj = Game.getObjectById('605ddb6c9a82e8b390ed4a9e')
        var tower = new classes_structures_tower(towerObj)
        tower.run()
    },
}

module.exports = routines_e17n55_towers_towerOne
