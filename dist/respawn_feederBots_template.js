const respawn_template = require('respawn_template')

class respawn_feederBots_template extends respawn_template {
    constructor(
        functionName = "feederBot",
        shortName = "feederBot",
        partArray = [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
    ) {
        super()
        this.functionName = functionName
        this.shortName = shortName
        this.partArray = partArray

    }
}

module.exports = respawn_feederBots_template