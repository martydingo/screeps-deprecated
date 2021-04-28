classes_respawn_prioritization = require('classes_respawn_prioritization')

class respawn_e17n55_routine extends classes_respawn_prioritization {
    constructor() {
        super()
        this.respawnRoutines = {
            sourceBots: {
                srcOne: routines_e17n55_sourceCreeps_srcOne.run(),
                srcTwo: routines_e17n55_sourceCreeps_srcTwo.run(),
            },
        }
        this.priorityMatrix = {
            0: 'TEST',
        }
    }

    respawn() {
        for (var creepClass in this.priorityMatrix) {
            for (var creep in this.priorityMatrix[creepClass]) {
                if (
                    this.priorityMatrix[creepClass][creep] == this.priorityLevel
                ) {
                    this.respawnRoutines[creepClass][creep]()
                } else {
                    this.priorityMatrix += 1
                }
            }
        }
    }
}

module.exports = respawn_e17n55_routine
