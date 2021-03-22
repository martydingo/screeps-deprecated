// class respawn_e27n38 {
//     constructor(){
//         this.spawn = Game.getObjectById("604a455b327d0791ecc1c03f")
//     }

// }
const respawn_feederBots_template = require('respawn_feederBots_template')
const bots_feederBots_e27n38_primarySpawn = require('bots_feederBots_e27n38_primarySpawn')

class respawn_feederBots_e27n38_primarySpawn extends respawn_feederBots_template {
    constructor(){
        super()
        this.bot = new bots_feederBots_e27n38_primarySpawn()
        this.spawn = this.bot.spawn
        this.maxActive = this.bot.maxActive
    }
    bots_feederBots_e27n38_respawnDaemon() {
        
        if (!this.spawn.spawning) {
            if (variables.bots.feederBots.E27N38.PrimarySpawn().length < this.maxActive) {
                console.log("E28N37: Spawning feederBot")
                this.bot.spawnCreep()
            }            
        }
    }
}

module.exports = respawn_feederBots_e27n38_primarySpawn