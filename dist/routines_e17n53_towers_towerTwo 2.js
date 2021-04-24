classes_structures_tower = require("classes_structures_tower")

var routines_e17n53_towers_towerTwo = {
    run: function(){
        room = 'E17N53'
        towerObj = Game.getObjectById('6071ee73f5e10e0e61bbe80e')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n53_towers_towerTwo