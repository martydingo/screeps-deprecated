classes_structures_link = require("classes_structures_link")

var routines_e17n56_links_spawnLink_via_storageLink = {
    run: function(){
        room = 'E17N56'
        link = Game.getObjectById('60642449e030746567b3178e')
        remoteLink = Game.getObjectById('60642da85353f23c0dd82928')
        link = new classes_structures_link(link, remoteLink, room)
        link.run()

    }
}

module.exports = routines_e17n56_links_spawnLink_via_storageLink