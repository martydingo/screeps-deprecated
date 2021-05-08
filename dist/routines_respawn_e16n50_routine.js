const classes_respawn_engine = require('classes_respawn_engine')

class routines_respawn_e16n50_routine extends classes_respawn_engine {
    constructor(roomName, spawnRoom) {
        super(roomName, spawnRoom)

        this.config.priority = {
            mistCreep: '1',
        }

        this.config.maxActive = {
            mistCreep: '2',
        }
    }
}

module.exports = routines_respawn_e16n50_routine
