class classes_structures_lab {
    constructor(labSelf, lab1, lab2, roomName) {
        this.labSelf = Game.getObjectById(labSelf)
        this.lab1 = Game.getObjectById(lab1)
        this.lab2 = Game.getObjectById(lab2)
        this.room = Game.rooms[roomName]
        this.result = null
    }

    react() {
        this.result = this.labSelf.runReaction(this.lab1, this.lab2)
    }

    run() {
        this.labSelf
        this.react()
    }
}

module.exports = classes_structures_lab
