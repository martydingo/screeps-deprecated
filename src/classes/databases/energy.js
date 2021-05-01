const classes_databases_template = require('classes_databases_template')

class classes_databases_energy extends classes_databases_template {
    constructor(room) {
        super()
        console.log(room)
        this.room = Game.rooms[room]
    }

    update() {
        if (this.room) {
            this.energy = this.room.storage.store[RESOURCE_ENERGY]
        }
        this.database += { [Game.time]: this.energy }
    }
}

module.exports = classes_databases_energy
