const classes_visual_template = require('classes_visual_template')

class classes_visual_storage extends classes_visual_template {
    constructor() {
        super()
    }

    drawStorage(storage) {
        this.room.visual.text(
            'Storage',
            storage.pos.x,
            storage.pos.y + this.textDistance + this.lineGap * 0,
            {
                color: this.fontColor,
                font: this.fontSize,
                align: this.fontAlign,
                opacity: this.fontOpacity,
            }
        )
        this.room.visual.text(
            'Energy: ' +
                storage.store[RESOURCE_ENERGY] +
                ' / ' +
                storage.store.getCapacity(RESOURCE_ENERGY),
            storage.pos.x,
            storage.pos.y + this.textDistance + this.lineGap * 1,
            {
                color: '#F5D769',
                font: this.fontSize,
                align: this.fontAlign,
                opacity: this.fontOpacity,
            }
        )
    }

    drawAll() {
        for (var room in Game.rooms) {
            this.room = Game.rooms[room]
            if (Game.rooms[room].storage)
                this.drawStorage(Game.rooms[room].storage)
        }
    }
}

module.exports = classes_visual_storage
