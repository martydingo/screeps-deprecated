classes_structures_tower = require("classes_structures_tower")

var routines_e17n56_towers_towerTwo = {
    run: function(){
        room = 'E17N56'
        towerObj = Game.getObjectById('60644be01e8252ad5d0fe272')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n56_towers_towerTwo