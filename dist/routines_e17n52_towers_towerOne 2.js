classes_structures_tower = require("classes_structures_tower")

var routines_e17n52_towers_towerOne = {
    run: function(){
        room = 'E17N52'
        towerObj = Game.getObjectById('60605f495ce9e50f54a9ec10')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n52_towers_towerOne