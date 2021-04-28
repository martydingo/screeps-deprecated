var utils_pathfinding_fleeHostileCreeps = {
    findPath: function (creep, destination) {
        let goals = destination

        let ret = PathFinder.search(creep.pos, goals, {
            plainCost: 1,
            swampCost: 5,
            flee: true,

            roomCallback: function (roomName) {
                let room = Game.rooms[roomName]
                // In this example `room` will always exist, but since
                // PathFinder supports searches which span multiple rooms
                // you should be careful!
                if (!room) return
                let costs = new PathFinder.CostMatrix()

                // Avoid creeps in the room
                room.find(FIND_HOSTILE_CREEPS).forEach((creep) => {
                    costs.set(creep.pos.x, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y - 3, 255)

                    costs.set(creep.pos.x, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y - 2, 255)

                    costs.set(creep.pos.x, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y - 1, 255)

                    costs.set(creep.pos.x, creep.pos.y, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y, 255)

                    costs.set(creep.pos.x, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y + 1, 255)

                    costs.set(creep.pos.x, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y + 2, 255)

                    costs.set(creep.pos.x, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x - 1, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x - 2, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x - 3, creep.pos.y + 3, 255)

                    costs.set(creep.pos.x, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y - 3, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y - 3, 255)

                    costs.set(creep.pos.x, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y - 2, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y - 2, 255)

                    costs.set(creep.pos.x, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y - 1, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y - 1, 255)

                    costs.set(creep.pos.x, creep.pos.y, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y, 255)

                    costs.set(creep.pos.x, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y + 1, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y + 1, 255)

                    costs.set(creep.pos.x, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y + 2, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y + 2, 255)

                    costs.set(creep.pos.x, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x + 1, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x + 2, creep.pos.y + 3, 255)
                    costs.set(creep.pos.x + 3, creep.pos.y + 3, 255)
                })

                return costs
            },
        })

        if (ret.incomplete == true) {
            console.log(creep.name + ' - WARNING: Could not pathfind a complete path!')
        }
        let pos = ret.path[0]
        return pos
    },
}

module.exports = utils_pathfinding_fleeHostileCreeps
