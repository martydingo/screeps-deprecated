const classes_structures_link = require('classes_structures_link')

var routines_e17n55_links_labLink_via_storageLink = {
    run: function () {
        const room = 'E17N55'
        var link = Game.getObjectById('60642449e030746567b3178e')
        const remoteLink = Game.getObjectById('60830e9bdbf3497cb2220f46')
        var linkObj = new classes_structures_link(link, remoteLink, room)
        linkObj.run()
    },
}

module.exports = routines_e17n55_links_labLink_via_storageLink
