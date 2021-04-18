classes_structures_tower = require("classes_structures_tower")

var routines_e17n55_towers_towerOne = {
    run: function(){
        room = 'E17N55'
        towerObj = Game.getObjectById('605ddb6c9a82e8b390ed4a9e')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n55_towers_towerOne