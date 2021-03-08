/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('respawn');
 * mod.thing == 'a thing'; // true
 */

var configuration = require('config')
var variables = require('vars')

var respawn = {
        "bots": {
            feederBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.feederBots.primarySpawn.function + "-" +  Game.time)
                spawn.spawnCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], configuration.bots.feederBots.primarySpawn.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.feederBots.primarySpawn.function }});
            },
            sourceBot_E26N37_primarySource: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.sourceBot.E26N37.primarySource.shortName + "-" + Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], configuration.bots.sourceBot.E26N37.primarySource.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.sourceBot.E26N37.primarySource.function }});
            },
            sourceBot_E26N37_secondarySource: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.sourceBot.E26N37.secondarySource.shortName + "-" + Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], configuration.bots.sourceBot.E26N37.secondarySource.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.sourceBot.E26N37.secondarySource.function }});
            },
            sourceBot_E25N37_secondarySource: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.sourceBot.E25N37secondarySource.shortName + "-" + Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], configuration.bots.sourceBot.E25N37secondarySource.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.sourceBot.E25N37secondarySource.function }});
            },
            upgradeBot_E26N37: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.upgradeBot.E26N37.shortName + "-" +  Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,CARRY,CARRY], configuration.bots.upgradeBot.E26N37.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.upgradeBot.E26N37.function }})
            },
            builderBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.builderBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], configuration.bots.builderBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.builderBot.function }});
            },
            repairBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.repairBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], configuration.bots.repairBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.repairBot.function }});
            },
            lootBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.lootBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], configuration.bots.lootBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.lootBot.function }});
            },
            transportBot_E26N37_sourceOneToStorage: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.transportBot.E26N37.sourceOneToStorage.shortName + "-" +  Game.time)
                spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], configuration.bots.transportBot.E26N37.sourceOneToStorage.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.transportBot.E26N37.sourceOneToStorage.function }});
            },
            transportBot_E26N37_sourceTwoToStorage: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.transportBot.E26N37.sourceTwoToStorage.shortName + "-" +  Game.time)
                spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], configuration.bots.transportBot.E26N37.sourceTwoToStorage.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.transportBot.E26N37.sourceTwoToStorage.function }});
            },
            soldierBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.soldierBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], configuration.bots.soldierBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.soldierBot.function }});
            },
            towerBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.towerBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], configuration.bots.towerBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.towerBot.function }});
            },
            E25N37claimBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.E25N37claimBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], configuration.bots.E25N37claimBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.E25N37claimBot.function }});
            },
            E26N38claimBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.E26N38claimBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([CLAIM,ATTACK,MOVE,MOVE], configuration.bots.E26N38claimBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.E26N38claimBot.function }});
            },
            E27N37claimBot: function(spawn=variables.spawns.E26N37.primarySpawn()){
                console.log("Spawning " + configuration.bots.E27N37claimBot.shortName + "-" +  Game.time)
                spawn.spawnCreep([CLAIM,ATTACK,MOVE,MOVE], configuration.bots.E27N37claimBot.shortName + "-" + Game.time, 
                {memory: {function: configuration.bots.E27N37claimBot.function }});
            },
        },
    respawnDaemon: function(){
        if(!variables.spawns.E26N37.primarySpawn().spawning){
            if(configuration.bots.priorityEnabled == "true"){
                if(variables.rooms.E26N37().energyAvailable >= 300){
                    if(variables.bots.feederBotsPrimarySpawn().length < configuration.bots.feederBots.primarySpawn.maxActive ){
                        respawn.bots.feederBot()                                           
                    } 
                    respawnLoopEntry: if(variables.rooms.E26N37().energyAvailable >= 1300){
                        if(variables.bots.sourceBots_E26N37_secondarySource().length < configuration.bots.sourceBot.E26N37.secondarySource.maxActive ){
                            respawn.bots.sourceBot_E26N37_secondarySource()
                            break respawnLoopEntry
                        } else if(variables.bots.transportBot_E26N37_sourceTwoToStorage().length < configuration.bots.transportBot.E26N37.sourceTwoToStorage.maxActive ){
                            respawn.bots.transportBot_E26N37_sourceTwoToStorage()
                            break respawnLoopEntry
                        } else if(variables.bots.transportBot_E26N37_sourceOneToStorage().length < configuration.bots.transportBot.E26N37.sourceOneToStorage.maxActive ){
                            respawn.bots.transportBot_E26N37_sourceOneToStorage()
                            break respawnLoopEntry
                        } else if(variables.bots.sourceBots_E26N37_primarySource().length < configuration.bots.sourceBot.E26N37.primarySource.maxActive ){
                            respawn.bots.sourceBot_E26N37_primarySource()
                            break respawnLoopEntry
                        } else if(variables.bots.sourceBot_E25N37_secondarySource().length < configuration.bots.sourceBot.E25N37.secondarySource.maxActive ){
                            respawn.bots.sourceBot_E25N37_secondarySource()
                            break respawnLoopEntry
                         } else if(variables.bots.E26N38claimBots().length < configuration.bots.E26N38claimBot.maxActive ){
                             respawn.bots.E26N38claimBot()
                             break respawnLoopEntry
                        } else if(variables.bots.E27N37claimBots().length < configuration.bots.E27N37claimBot.maxActive ){
                            respawn.bots.E27N37claimBot()
                            break respawnLoopEntry
                        } else if(variables.bots.soldierBots().length < configuration.bots.soldierBot.maxActive ){
                            respawn.bots.soldierBot()
                            break respawnLoopEntry
                        } else if(variables.bots.upgradeBots_E26N37().length < configuration.bots.upgradeBot.E26N37.maxActive ){
                            respawn.bots.upgradeBot_E26N37()
                            break respawnLoopEntry
                        } else if(variables.bots.towerBots().length < configuration.bots.towerBot.maxActive ){
                            respawn.bots.towerBot()
                            break respawnLoopEntry
                        } else if(variables.bots.repairBots().length < configuration.bots.repairBot.maxActive ){
                            respawn.bots.repairBot()
                            break respawnLoopEntry
                        } else if(variables.bots.lootBots().length < configuration.bots.lootBot.maxActive ){
                            respawn.bots.lootBot()
                            break respawnLoopEntry
                        } else if(variables.bots.builderBots().length < configuration.bots.builderBot.maxActive ){
                            respawn.bots.builderBot()
                            break respawnLoopEntry
                        } else if(variables.bots.E25N37claimBots().length < configuration.bots.E25N37claimBot.maxActive ){
                            respawn.bots.E25N37claimBot()
                            break respawnLoopEntry
                        }
                    }
                }
            }
                         
                                                

            // if(variables.rooms.E26N37().energyAvailable >= 550){
            //     if(variables.bots.sourceBots().length < configuration.bots.sourceBot.secondarySource.maxActive ){
            //         respawn.bots.sourceBot_secondSource()
            //     } else {
            //         if(variables.bots.upgradeBots().length < configuration.bots.upgradeBot.maxActive ){
            //             respawn.bots.upgradeBot()
            //         }
            //         if(variables.bots.builderBots().length < configuration.bots.builderBot.maxActive ){
            //             respawn.bots.builderBot()
            //         }
            //         if(variables.bots.repairBots().length < configuration.bots.repairBot.maxActive ){
            //             respawn.bots.repairBot()
            //         }    
            //     }
            // }
        }
    }
}


module.exports = respawn