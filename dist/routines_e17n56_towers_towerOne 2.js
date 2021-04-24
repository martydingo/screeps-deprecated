classes_structures_tower = require("classes_structures_tower")

var routines_e17n56_towers_towerOne = {
    run: function(){
        room = 'E17N56'
        towerObj = Game.getObjectById('606b69aa70ed373287aa7f80')
        tower = new classes_structures_tower(towerObj)
        tower.run()

    }
}

module.exports = routines_e17n56_towers_towerOne