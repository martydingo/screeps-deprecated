// class respawn_e27n38 {
//     constructor(){
//         this.spawn = Game.getObjectById("604a455b327d0791ecc1c03f")
//     }

// }
const respawn_feederBots_e27n38 = require('respawn_feederBots_e27n38')

var respawn_e27n38 = {
    feederBotDaemon: function () {
        feederBot = new respawn_feederBots_e27n38()
        console.log(variables.bots.feederBots.E27N38.PrimarySpawn().length)
        if (variables.bots.feederBots.E27N38.PrimarySpawn().length < feederBot.maxActive) {
            console.log("E27N36: Spawning feederBot")
            feederBot.spawnCreep()
        }
    },
    respawnDaemon: function (spawner = Game.getObjectById("60494cc5a6bccc6524525a18")) {

        if (!spawner.spawning) {
            this.feederBotDaemon()
        }

    }
}

module.exports = respawn_e27n38