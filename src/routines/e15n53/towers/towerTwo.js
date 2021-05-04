classes_structures_tower = require('classes_structures_tower')

var routines_e15n53_towers_towerTwo = {
    run: function () {
        const room = 'E15N53'
        const towerObj = Game.getObjectById('6071ee73f5e10e0e61bbe80e')
        var tower = new classes_structures_tower(towerObj)
        tower.run()
    },
}

module.exports = routines_e15n53_towers_towerTwo
