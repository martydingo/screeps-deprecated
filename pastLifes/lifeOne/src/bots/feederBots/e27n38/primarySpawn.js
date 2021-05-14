const bots_feederBots_template = require('bots_feederBots_template')

class bots_feederBots_e27n38_primarySpawn extends bots_feederBots_template {
    constructor(
        functionName,
        shortName,
        maxActive = 1,
        partArray = [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
        energySource,
        spawn = Game.getObjectById('60494cc5a6bccc6524525a18')
    ) {
        super(functionName, shortName, maxActive, partArray, energySource, spawn)
        this.spawn = spawn
        this.functionName = this.functionName + '_' + this.spawn.pos.roomName
        this.shortName = this.shortName + '_' + this.spawn.pos.roomName + '-' + Game.time
        this.maxActive = maxActive
        this.partArray = partArray
        this.energySource = energySource
    }
    spawnCreep() {
        this.spawn.spawnCreep(this.partArray, this.shortName, {
            memory: {
                function: this.functionName,
            },
        })
    }
}

module.exports = bots_feederBots_e27n38_primarySpawn
