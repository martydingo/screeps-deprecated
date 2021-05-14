const bots_template = require('bots_template')

class bots_feederBots_template extends bots_template {
    constructor(
        functionName = 'feederBot',
        shortName = 'feederBot',
        partArray = [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
    ) {
        super()
        this.functionName = functionName
        this.shortName = shortName
        this.partArray = partArray
    }
}

module.exports = bots_feederBots_template
