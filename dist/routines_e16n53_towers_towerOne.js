classes_structures_tower = require('classes_structures_tower')

var routines_e16n53_towers_towerOne = {
    run: function () {
        const room = 'E16N53'
        const towerObj = Game.getObjectById('60605f495ce9e50f54a9ec10')
        var tower = new classes_structures_tower(towerObj)
        tower.run()
    },
}

module.exports = routines_e16n53_towers_towerOne
