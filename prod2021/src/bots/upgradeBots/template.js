const bots_template = require('bots_template')

class bots_upgradeBots_template extends bots_template {
    constructor(
        functionName = "upgradeBot",
        shortName = "upgradeBot",
        partArray = [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
    ) {
        super()
        this.functionName = functionName
        this.shortName = shortName
        this.partArray = partArray

    }
}

module.exports = bots_upgradeBots_template