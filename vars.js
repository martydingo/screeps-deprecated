/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('vars');
 * mod.thing == 'a thing'; // true
 */

configuration = require('config')

var vars = {
    
    "bots": {
        feederBotsPrimarySpawn: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.feederBots.primarySpawn.function)
        },
        sourceBot_E25N37_secondarySource: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.sourceBot.E25N37.secondarySource.function)
        },
        sourceBots_E26N37_primarySource: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.sourceBot.E26N37.primarySource.function)
        },
        sourceBots_E26N37_secondarySource: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.sourceBot.E26N37.secondarySource.function)
        },
        upgradeBots_E26N37: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.upgradeBot.E26N37.function)
        },
        builderBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.builderBot.function)
        },
        repairBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.repairBot.function)
        },
        lootBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.lootBot.function)
        },
        transportBot_E26N37_sourceOneToStorage: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.transportBot.E26N37.sourceOneToStorage.function)
        },
        transportBot_E26N37_sourceTwoToStorage: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.transportBot.E26N37.sourceTwoToStorage.function)
        },
        towerBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.towerBot.function)
        },
        soldierBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.soldierBot.function)
        },
        E25N37claimBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.E25N37claimBot.function)
        },
        E26N38claimBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.E26N38claimBot.function)
        },
        E27N37claimBots: function(){
            return _.filter(Game.creeps, creep => creep.memory.function == configuration.bots.E27N37claimBot.function)
        },
        "injuredBots": {
            E26N37: function(){
               return _.filter(Game.creeps, creep =>  creep.hits < creep.hitsMax)
            }
        },
        all: function(){
            _.Game.room.find(FIND_MY_CREEPS)
        }
    },
    "spawns": {
        "E26N37":{
            primarySpawn: function(){
                return Game.getObjectById("60415ab4d4bed2ceae0829a7")
            }
        }
    },
    "sources": {
        "E25N37": {
            primary: function(){
                return Game.getObjectById("5bbcae5f9099fc012e638e21") 
            },
            secondary: function(){
                return Game.getObjectById("5bbcae5f9099fc012e638e22") 
            }
        },
        "E26N37": {
            primary: function(){
                return Game.getObjectById("5bbcae6d9099fc012e639040") 
            },
            secondary: function(){
                return Game.getObjectById("5bbcae6d9099fc012e639042") 
            }
        },
        "E26N38": {
            primary: function(){
                return Game.getObjectById("5bbcae6d9099fc012e63903e") 
            },
        }
    },
    "structures": {
        unrepairedStructures: function() {
            return variables.rooms.E26N37().find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax && object.structureType == STRUCTURE_CONTAINER || object.hits < object.hitsMax && object.structureType == STRUCTURE_TOWER || object.hits < object.hitsMax && object.structureType == STRUCTURE_ROAD || object.hits < 2000 && object.hits < object.hitsMax && object.structureType == STRUCTURE_RAMPART || object.hits < 2000 && object.hits < object.hitsMax && object.structureType == STRUCTURE_WALL
            })
        },
        unrepairedRampartsWalls1k: function() {
            return variables.rooms.E26N37().find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax && object.hits < 1000 && object.structureType == STRUCTURE_RAMPART || object.hits < object.hitsMax && object.hits < 1000 && object.structureType == STRUCTURE_ROAD 
            })
        },
        "towers": {
            "E26N37": {
                eastSpawnTower: function(){
                    eastSpawnTower = Game.getObjectById("6043b93bd8aa279e9ad3b092")
                    return eastSpawnTower
                }
            }
        },
        "containers": {
            all: function(){
                return variables.rooms.E26N37().find(FIND_STRUCTURES, {
                    filter: object => object.structureType == STRUCTURE_CONTAINER
                })
            },
            "spawnContainers":{
                    primarySpawn: function(){
                        spawnContainer = Game.getObjectById("6042792d210d0758c0f85c12")
                        return spawnContainer
                }
            },
            "upgradeContainers":{
                    E26N37: function(){
                        spawnContainer = Game.getObjectById("60428c280c8afa75ac8a9980")
                        return spawnContainer
                }
            },
        },
        "extensions": {
            all: function(){
                return variables.rooms.E26N37().find(FIND_STRUCTURES, {
                    filter: object => object.structureType == STRUCTURE_EXTENSION
                })
            },
            notFull: function(){
                return variables.rooms.E26N37().find(FIND_STRUCTURES, {
                    filter: object => object.structureType == STRUCTURE_EXTENSION && object.energy < object.energyCapacity
                })
            }
        },
        "storage":{
            "E26N37":{
                primary: function(){
                    storage = Game.getObjectById("60448d520c8afa4b168b5e52")
                    return storage
                }
            }
        },
        "controllers":{
            E26N37: function(){
                controller = Game.getObjectById("5bbcae6d9099fc012e639041")
                return controller
            }
        }
    },
    "rooms": {
        E26N37: function(){
            return Game.getObjectById("5bbcae6d9099fc012e639040").room
        },
        E25N37: function(){
            const requestedRoom = new RoomPosition(31,21,'E25N37')        
            return requestedRoom
        }
    },
    "hostiles":{
        "E26N37":{
            "creeps": {
                all: function(){
                    return variables.rooms.E26N37().find(FIND_HOSTILE_CREEPS)
                }
            }
        }
    }
}

module.exports = vars