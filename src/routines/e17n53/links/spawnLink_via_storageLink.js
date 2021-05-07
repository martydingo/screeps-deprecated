const classes_structures_link = require('classes_structures_link')

var routines_e17n55_links_spawnLink_via_storageLink = {
    run: function () {
        const room = 'E17N55'
        var link = Game.getObjectById('60642449e030746567b3178e')
        const remoteLink = Game.getObjectById('608478c659886d383bb4eebd')
        var linkObj = new classes_structures_link(link, remoteLink, room)
        linkObj.run()
    },
}

module.exports = routines_e17n55_links_spawnLink_via_storageLink
