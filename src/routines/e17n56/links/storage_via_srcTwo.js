classes_structures_link = require('classes_structures_link')

var routines_e17n56_links_storage_via_srcTwo = {
    run: function () {
        const room = 'E17N56'
        var link = Game.getObjectById('6079c70a2588dd61dce30462')
        const remoteLink = Game.getObjectById('6079cbeef913971725c02bc3')
        var link = new classes_structures_link(link, remoteLink, room)
        link.run()
    },
}

module.exports = routines_e17n56_links_storage_via_srcTwo
