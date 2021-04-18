classes_structures_link = require("classes_structures_link")

var routines_e17n56_links_storage_via_srcTwo = {
    run: function(){
        room = 'E17N56'
        link = Game.getObjectById('6079c70a2588dd61dce30462')
        remoteLink = Game.getObjectById('6079cbeef913971725c02bc3')
        link = new classes_structures_link(link, remoteLink, room)
        link.run()

    }
}

module.exports = routines_e17n56_links_storage_via_srcTwo