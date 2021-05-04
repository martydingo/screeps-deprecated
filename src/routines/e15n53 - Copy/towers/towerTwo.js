classes_structures_tower = require('classes_structures_tower')

var routines_e15n53_towers_towerTwo = {
    run: function () {
        const room = 'E15N53'
        const towerObj = Game.getObjectById('60831fb29fdae55798a87165')
        var tower = new classes_structures_tower(towerObj)
        tower.run()
    },
}

module.exports = routines_e15n53_towers_towerTwo
