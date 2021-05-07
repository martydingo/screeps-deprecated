const classes_structures_link = require('classes_structures_link')

var routines_e17n53_links_labLink_via_storageLink = {
    run: function () {
        const room = 'E17N53'
        var link = Game.getObjectById('6070fac536fbffe60ae42d35')
        const remoteLink = Game.getObjectById('6071ae0ff5e10e6714bbd05c')
        var linkObj = new classes_structures_link(link, remoteLink, room)
        linkObj.run()
    },
}

module.exports = routines_e17n53_links_labLink_via_storageLink
