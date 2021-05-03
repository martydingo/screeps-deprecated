class classes_healthchecks_invader {
    constructor(roomName) {
        this.room = Game.rooms[roomName]
    }

    run() {
        if (this.room) {
            if (
                this.room.find(FIND_HOSTILE_CREEPS, {
                    filter: (Creep) => Creep.owner.username == 'Invader',
                }).length > 0
            ) {
                if (Memory.e16n55.healthcheck.invadersPresent) {
                    if (
                        Memory.e16n55.healthcheck.invadersPresent <
                        Game.time - 1500
                    ) {
                        Memory.e16n55.healthcheck = {
                            invadersPresent: Game.time,
                        }
                    }
                } else {
                    Memory.e16n55.healthcheck = {
                        invadersPresent: Game.time,
                    }
                }
            } else {
                if (Memory.e16n55.healthcheck.invadersPresent) {
                    if (
                        Memory.e16n55.healthcheck.invadersPresent <
                        Game.time - 1500
                    ) {
                        delete Memory.e16n55.healthcheck.invadersPresent
                    }
                }
            }
        }
    }
}

module.exports = classes_healthchecks_invader
