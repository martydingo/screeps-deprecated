const classes_visual_template = require('classes_visual_template')

class classes_visual_spawns extends classes_visual_template {
    constructor(room) {
        super()
        this.room = Game.rooms[room]
    }

    checkSpawningCreepName(spawn) {
        if (spawn.spawning) {
            return Game.creeps[spawn.spawning.name].memory.creepClass
        } else return false
    }

    drawSpawn(spawn) {
        if (this.checkSpawningCreepName(spawn) != false) {
            this.room.visual.text(
                'Spawning ' + this.checkSpawningCreepName(spawn) + '...',
                spawn.pos.x,
                spawn.pos.y + this.textDistance + this.lineGap * 0,
                {
                    color: this.fontColor,
                    font: this.fontSize,
                    align: this.fontAlign,
                    opacity: this.fontOpacity,
                }
            )
        } else {
            this.room.visual.text(
                'Spawner Idle',
                spawn.pos.x,
                spawn.pos.y + this.textDistance + this.lineGap * 0,
                {
                    color: this.fontColor,
                    font: this.fontSize,
                    align: this.fontAlign,
                    opacity: this.fontOpacity,
                }
            )
        }
        this.room.visual.text(
            'Energy: ' +
                spawn.store[RESOURCE_ENERGY] +
                ' / ' +
                spawn.store.getCapacity(RESOURCE_ENERGY),
            spawn.pos.x,
            spawn.pos.y + this.textDistance + this.lineGap * 1,
            {
                color: '#F5D769',
                font: this.fontSize,
                align: this.fontAlign,
                opacity: this.fontOpacity,
            }
        )
    }

    drawAll() {
        for (var spawn in Game.spawns) {
            this.drawSpawn(Game.spawns[spawn])
        }
    }
}

module.exports = classes_visual_spawns
