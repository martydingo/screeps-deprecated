classes_structures_tower = require("classes_structures_tower")

var routines_e17n55_towers_towerThree = {
    run: function(){
        room = 'E17N55'
        towerObj = Game.getObjectById('6081839c8000646ca4ee4fa8')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n55_towers_towerThree