/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('visual');
 * mod.thing == 'a thing'; // true
 */

variables = require('vars')

var visual = {
    "room": {
        paint: function () {
            visual.room.paintSpawnInfo()
            visual.room.paintRoomHUD()
        },
        paintSpawnInfo: function () {
            for (spawnName in Game.spawns) {
                spawn = Game.spawns[spawnName]
                spawn.room.visual.text(
                    "E: " + spawn.store[RESOURCE_ENERGY],
                    spawn.pos.x,
                    spawn.pos.y + 1.2, {
                        color: "#b58900",
                        font: 0.33
                    }
                )

                extensions = variables.structures.extensions.E26N37.all()
                for (extension in extensions) {

                    spawn.room.visual.text(
                        "E: " + extensions[extension].store[RESOURCE_ENERGY],
                        extensions[extension].pos.x,
                        extensions[extension].pos.y + 0.75, {
                            color: "#b58900",
                            font: 0.33
                        }
                    )
                }
                extensions = variables.structures.containers.all()
                for (extension in extensions) {

                    spawn.room.visual.text(
                        "E: " + extensions[extension].store[RESOURCE_ENERGY],
                        extensions[extension].pos.x,
                        extensions[extension].pos.y + 0.75, {
                            color: "#b58900",
                            font: 0.33
                        }
                    )
                }
            }
        },
        paintRoomHUD: function () {
            for (spawnName in Game.spawns) {
                draw = Game.spawns[spawnName].room.visual
                drawPosX = 40.5
                drawPosY = 2
                // Energy in Spawner Bar

                energy = Game.spawns[spawnName].room.energyAvailable
                energyCapacity = Game.spawns[spawnName].room.energyCapacityAvailable
                energyBarBGLength = 5
                energyBar = (energy / energyCapacity) * energyBarBGLength

                draw.text("Energy in spawner", drawPosX, drawPosY, {
                    color: "#b58900",
                    font: 0.5
                })
                draw.rect(drawPosX - 2, drawPosY + 0.25, 5, 0.5, {
                    fill: "#444444",
                })
                draw.rect(drawPosX - 2, drawPosY + 0.25, energyBar, 0.5, {
                    fill: "#b58900",
                })
                draw.text(energy + "/" + energyCapacity, (drawPosX - 2) + (energyBarBGLength / 2), drawPosY + 0.6, {
                    color: "#ffffff",
                    font: 0.3
                })

                // Energy in Storage Bar

                energy = variables.structures.storage.E26N37.primary().store[RESOURCE_ENERGY]
                energyCapacity = variables.structures.storage.E26N37.primary().store.getCapacity(RESOURCE_ENERGY)
                energyBarBGLength = 5
                energyBar = (energy / energyCapacity) * energyBarBGLength

                draw.text("Energy in storage", drawPosX, drawPosY + 2, {
                    color: "#b58900",
                    font: 0.5
                })
                draw.rect(drawPosX - 2, drawPosY + 2.25, 5, 0.5, {
                    fill: "#444444",
                })
                draw.rect(drawPosX - 2, drawPosY + 2.25, energyBar, 0.5, {
                    fill: "#b58900",
                })
                draw.text(energy + "/" + energyCapacity, (drawPosX - 2) + (energyBarBGLength / 2), drawPosY + 2.6, {
                    color: "#ffffff",
                    font: 0.3
                })
                // levelProgress in Storage Bar

                levelProgress = variables.structures.controllers.E26N37().progress
                levelProgressCapacity = variables.structures.controllers.E26N37().progressTotal
                levelProgressBarBGLength = 5
                levelProgressBar = (levelProgress / levelProgressCapacity) * levelProgressBarBGLength

                draw.text("Progress to next level", drawPosX + 0.5, drawPosY + 4, {
                    color: "#b58900",
                    font: 0.5
                })
                draw.rect(drawPosX - 2, drawPosY + 4.25, 5, 0.5, {
                    fill: "#444444",
                })
                draw.rect(drawPosX - 2, drawPosY + 4.25, levelProgressBar, 0.5, {
                    fill: "#b58900",
                })
                draw.text(levelProgress + "/" + levelProgressCapacity, (drawPosX - 2) + (levelProgressBarBGLength / 2), drawPosY + 4.6, {
                    color: "#ffffff",
                    font: 0.3
                })
            }
        }
    }
}

module.exports = visual