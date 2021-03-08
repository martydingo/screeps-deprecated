/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('bots');
 * mod.thing == 'a thing'; // true
 */

var configuration = require('config')
var variables = require('vars')
const { hostiles } = require('./vars')

var bots = {
    "soldierBot":{
        run: function(creep){
            if(creep.room.find(FIND_HOSTILE_STRUCTURES).length == 0){
                destination = variables.rooms.E25N37()
                if(creep.pos != destination){
                    creep.moveTo(destination, {visualizePathStyle: {stroke: '#ffffff'}})
                }
            }
            if(creep.room.find(FIND_HOSTILE_STRUCTURES).length > 0){
                hostileCreeps = creep.room.find(FIND_HOSTILE_STRUCTURES)
                console.log(hostileCreeps[1] + " + " + creep.body[0].type)
                if( creep.attack(hostileCreeps[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hostileCreeps[1], {visualizePathStyle: {stroke: '#cb4b16'}});
                } else {
                    console.log(creep.name + ': Error, enabling debugging and trying again')
                    console.log("Error: " + creep.attack(hostileCreeps[0]))
                }
            }
        }
    },
    "sourceBot": {
        gatherSource: function(creep, source){
            source = Game.getObjectById(source)
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source), {visualizePathStyle: {stroke: '#b58900'}}                
            }

        },
        deliverSource: function(creep, container){
            container = Game.getObjectById(container)
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container, {visualizePathStyle: {stroke: '#fafafa'}})
            }
        },
        run: function(creep, source, container){
            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                bots.sourceBot.gatherSource(creep, source)
            } 
            else
            {
                bots.sourceBot.deliverSource(creep,container)
            }
        },
        "towerBot": {
            gatherSourceAndDeliverToTower: function(creep){
                tower = variables.structures.towers.E26N37.eastSpawnTower()
                if(creep.store.getUsedCapacity() < 50) {
                    if(creep.withdraw(Game.getObjectById(configuration.bots.feederBots.primarySpawn.source), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(Game.getObjectById(configuration.bots.feederBots.primarySpawn.source));
                        creep.say("📦")
                    }
                }
                else if(tower.store[RESOURCE_ENERGY] < tower.store.getCapacity(RESOURCE_ENERGY) - (creep.store.getCapacity(RESOURCE_ENERGY)+10)) {
                    if(creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower, {visualizePathStyle: {stroke: '#ffffff'}})
                        creep.say("🏠")
                    } 
                }
                else {creep.moveTo(Game.flags["Idle Area"])
                    creep.say("Idling")
                }
            },
            run: function(creep){
                    bots.sourceBot.gatherSourceAndDeliverToSpawnerExtensions(creep)
            },
        },
        "E26N37": {
            "primarySource": {
                run: function(creep){
                    source = configuration.bots.sourceBot.E26N37.primarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E26N37.primarySource.harvestingOptions.container
                    bots.sourceBot.run(creep,source,container)
                }
            },
            "secondarySource": {
                run: function(creep){
                    source = configuration.bots.sourceBot.E26N37.secondarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E26N37.secondarySource.harvestingOptions.container
                    bots.sourceBot.run(creep,source,container)
                }
            },  
        },
        "E25N37":{
            "secondarySource": {
                gatherSourceAndDeliverToContainer: function(creep){
                    if(creep.store.getFreeCapacity() > 0) {
                        var sources = variables.sources.E25N37.secondary()
                        if(sources == null){
                            creep.moveTo(variables.rooms.E25N37(), {visualizePathStyle: {stroke: '#ffffff'}})
                        }
                        if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sources, {visualizePathStyle: {stroke: '#b58900'}})
                            creep.say("⛏️")
                        }
                    }
                    else if(variables.structures.storage.E26N37.primary().store[RESOURCE_ENERGY] < variables.structures.storage.E26N37.primary().store.getCapacity(RESOURCE_ENERGY)) {
                        if(creep.transfer(variables.structures.storage.E26N37.primary(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(variables.structures.storage.E26N37.primary(), {visualizePathStyle: {stroke: '#ffffff'}})
                            creep.say("📦")
                        } 
                    }
                },
                run: function(creep){
                    bots.sourceBot.E25N37secondarySource.gatherSourceAndDeliverToContainer(creep)
                }
            }
        }
    },
    "feederBot": {
        "primarySpawn": {
            feedSpawnExtensions: function(creep) {
                if(creep.store.getUsedCapacity() < 50) {
                    if(creep.withdraw(Game.getObjectById(configuration.bots.feederBots.primarySpawn.source), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(Game.getObjectById(configuration.bots.feederBots.primarySpawn.source));
                        creep.say("📦")
                    }
                }
                else if(variables.spawns.E26N37.primarySpawn().energy < variables.spawns.E26N37.primarySpawn().energyCapacity) {
                    if(creep.transfer(variables.spawns.E26N37.primarySpawn(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(variables.spawns.E26N37.primarySpawn(), {visualizePathStyle: {stroke: '#ffffff'}})
                        creep.say("📦")
                    } 
                } 
                else if(creep.transfer(variables.structures.extensions.notFull()[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(variables.structures.extensions.notFull()[0], {visualizePathStyle: {stroke: '#ffffff'}})
                        }
                        
                else {
                    creep.moveTo(Game.flags["Feeder Idle Area"])
                    creep.say("Idling")
                }
            },
            renew: function(creep){
                currentRoom = creep.room
                localSpawner = currentRoom.find( STRUCTURE_SPAWN )
                if(variables.spawns.E26N37.primarySpawn().renewCreep(creep) == ERR_NOT_IN_RANGE	){
                    creep.moveTo(variables.spawns.E26N37.primarySpawn())
                }
            },
            shouldRenew: function(creep){
                try{
                    if(creep.ticksToLive < configuration.bots.renewWhenTTLBelow){
                        shouldRenew = true 
                    } else 
                    if(creep.ticksToLive >= configuration.bots.returnWhenTTLAbove){
                        shouldRenew = false
                    }
                    return shouldRenew
                } 
                catch(err){
                    if(err == "ReferenceError: shouldRenew is not defined"){
                        shouldRenew = false
                    }
                    else {
                        console.log(err)
                    }
                }
            },
            run: function(creep){
                //if(bots.feederBot.primarySpawn.shouldRenew(creep) == true ){
                //    console.log("feederBot renewing...")
                //    bots.feederBot.primarySpawn.renew(creep)
                //} else { 
                    bots.feederBot.primarySpawn.feedSpawnExtensions(creep)
            

            }
        }
    },
    "upgradeBot": {
        "E26N37":{

            run: function(creep) {
                try{
                    if(creep.store[RESOURCE_ENERGY] == 0) {
                        shouldGoUpgrade = false
                    } else 
                    if(creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
                        shouldGoUpgrade = true
                    }
                    if(shouldGoUpgrade == false){
                       if(variables.structures.storage.E26N37.primary()){
                           if(variables.structures.storage.E26N37.primary().store.getUsedCapacity([RESOURCE_ENERGY]) > 49){
                               var container = variables.structures.storage.E26N37.primary();
                               if(creep.withdraw(container,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                   creep.moveTo(container, {visualizePathStyle: {stroke: '#b58900'}});
                                   creep.say("⛏️")
                               }
                           } 
                       } else {
                            var sources = creep.room.find(FIND_SOURCES);
                            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(sources[0]);
                                creep.say("⛏️")
                            }
                        }
                    }
                        else {
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#cb4b16'}});
                            creep.say("⭐️")
                        }
                    }
                } 
                catch(err){
                    if( err == "ReferenceError: shouldGoUpgrade is not defined"){
                        //console.log("Initialising shouldGoUpgrade variable")
                        shouldGoUpgrade = false;
                    } else {
                        console.log(err)
                    }
                }
            }
        }
    },
    "builderBot": {
        run: function(creep) {
            if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
                creep.memory.building = false;
                creep.say("⛏️ Mine");
            }
            if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
                creep.memory.building = true;
                creep.say('🚧 Build');
            }
            if(creep.memory.building) {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }                
                else {creep.moveTo(Game.flags["Idle Area"])
                creep.say("Idling")
            }
            }
            else {
                var container = variables.structures.storage.E26N37.primary()
                if(creep.withdraw(container,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(container, {visualizePathStyle: {stroke: '#b58900'}});
                    creep.say("⛏️")
                }
            }
        }
    },
    "repairBot": {
        run: function(creep){
            try {
                if(creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                    shouldGoRepair = true
                }
                if(creep.store.getUsedCapacity() < 8) {
                    shouldGoRepair = false
                }
                if(shouldGoRepair == false){
                    if(creep.harvest(variables.sources.E26N37.primary()) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(variables.sources.E26N37.primary(), {visualizePathStyle: {stroke: '#ffaa00'}});
                        creep.say("⛏️ Mine")
                    }
                }
                else if(shouldGoRepair){
                    var repairJobs = variables.structures.unrepairedRampartsWalls1k()
                    if(repairJobs.length > 0){
                        if(creep.repair(repairJobs[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(repairJobs[0], {visualizePathStyle: {stroke: '#ffffff'}});
                            creep.say("🔨 Repair")
                        }
                    }
                    //console.log(repairJobs.length)
                    else {creep.moveTo(Game.flags["Idle Area"])
                    creep.say("Idling")
                }
            }
            }
            catch(err){
                if( err == "ReferenceError: shouldGoRepair is not defined"){
                    //console.log("Initialising shouldGoRepair variable")
                    shouldGoRepair = false;
                } else {
                    console.log(err)
                }
            }
        }
    },
    "lootBot":{
        run: function(creep){
            if(creep.store[RESOURCE_ENERGY] == 0){
                target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                if(target) {
                    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            } else if(x = creep.transfer(variables.structures.storage.E26N37.primary(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(variables.structures.storage.E26N37.primary())
                }
                
                else {
                    creep.moveTo(Game.flags['Idle Area'])
            }
            }
    },
    "E25N37claimBot": {
        run: function(creep){
            if(configuration.bots.E25N37claimBot.claimTarget != ""){
                claimTargetID = configuration.bots.E25N37claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                claimResult = creep.reserveController(claimTarget)
                if(claimResult == ERR_NOT_IN_RANGE){
                    creep.moveTo(claimTarget, {visualizePathStyle: {stroke: '#cb4b16'}})
                } else if(claimResult == ERR_INVALID_TARGET){
                    creep.moveTo(new RoomPosition(46,4,'E25N37'), {visualizePathStyle: {stroke: '#ffffff'}})
                }
            }
        }
    },
    "E26N38claimBot": {
        run: function(creep){
            if(configuration.bots.E26N38claimBot.claimTarget != ""){
                claimTargetID = configuration.bots.E26N38claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                    console.log(claimTarget)
                claimResult = creep.reserveController(claimTarget)
                if(claimResult == ERR_NOT_IN_RANGE){
                    creep.moveTo(claimTarget, {visualizePathStyle: {stroke: '#cb4b16'}})
                } else if(claimResult == ERR_INVALID_TARGET){
                    console.log(claimResult)
                    creep.moveTo(new RoomPosition(30,47,'E26N38'), {visualizePathStyle: {stroke: '#ffffff'}})
                }
            }
        }

    },
    "E27N37claimBot": {
        run: function(creep){
            if(configuration.bots.E27N37claimBot.claimTarget != ""){
                claimTargetID = configuration.bots.E27N37claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                    console.log(claimTarget)
                claimResult = creep.reserveController(claimTarget)
                if(claimResult == ERR_NOT_IN_RANGE){
                    creep.moveTo(claimTarget)
                } else if(claimResult == ERR_INVALID_TARGET){
                    console.log(claimResult)
                    creep.moveTo(new RoomPosition(8,15,'E27N37'), {visualizePathStyle: {stroke: '#ffffff'}})
                }
            }
        }

    },
    "transportBots": {
        travelAndPickUp: function(creep,src,resource_type){
            src = Game.getObjectById(src)
            if(creep.withdraw(src,resource_type) == ERR_NOT_IN_RANGE){
                creep.moveTo(src, {visualizePathStyle: {stroke: '#00aaff'}})
            }
        },
        travelAndDropOff: function(creep,dst){
            dst = Game.getObjectById(dst)
            if(creep.transfer(dst, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(dst, {visualizePathStyle: {stroke: '#aaff00'}})
            }
            
        },
        "E26N37": {
            "sourceOneToStorage":{
                run: function(creep){
                    src = configuration.bots.transportBot.E26N37.sourceOneToStorage.route.source
                    dst = configuration.bots.transportBot.E26N37.sourceOneToStorage.route.destination
                    resource_type = RESOURCE_ENERGY
                    
                    if(creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)){
                        bots.transportBots.travelAndPickUp(creep,src,resource_type)
                    } 
                    else
                    {
                        bots.transportBots.travelAndDropOff(creep,dst)
                    }
                }
            },
            "sourceTwoToStorage":{
                run: function(creep){
                    src = configuration.bots.transportBot.E26N37.sourceTwoToStorage.route.source
                    dst = configuration.bots.transportBot.E26N37.sourceTwoToStorage.route.destination
                    resource_type = RESOURCE_ENERGY
                    
                    if(creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)){
                        bots.transportBots.travelAndPickUp(creep,src,resource_type)
                    } 
                    else
                    {
                        bots.transportBots.travelAndDropOff(creep,dst)
                    }
                }
            }
        }

    },

    botDaemon: function(){
        for(var creep in Game.creeps) {
            var botFunction = Memory.creeps[creep].function
            bot = Game.creeps[creep]
    
            switch(botFunction) {
                case 'feederBot_primarySpawn':
                    bots.feederBot.primarySpawn.run(bot)
                    break;
                case 'sourceBot_sS':
                    bots.sourceBot.E26N37.secondarySource.run(bot)
                    //bots.transportBots.E26N37.sourceOneToStorage.run(bot)
                    break;
                case 'sourceBot_E26N37_fS':
                    bots.sourceBot.E26N37.primarySource.run(bot)
                    break;
                case 'sourceBot_E26N37_pS':
                    bots.sourceBot.E26N37.primarySource.run(bot)
                    break;
                case 'sourceBot_E26N37_sS':
                    bots.sourceBot.E26N37.secondarySource.run(bot)
                    break;
                case 'upgradeBot_E26N37':
                    bots.upgradeBot.E26N37.run(bot)
                    break;
                case 'builderBot':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBot.run(bot)
                    break;
                case 'repairBot':
                    bots.repairBot.run(bot)
                    break;
                case 'lootBot':
                    bots.lootBot.run(bot)
                    break;
                case 'transportBot_pS_to_sT_E26N37':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N37.sourceOneToStorage.run(bot)
                    break;
                case 'transportBot_sS_to_sT':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N37.sourceTwoToStorage.run(bot)
                    break;
                case 'transportBot_sS_to_sT_E26N37':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N37.sourceTwoToStorage.run(bot)
                    break;
                case 'soldierBot':
                    bots.soldierBot.run(bot)
                    break;
                case 'towerBot':
                    bots.sourceBot.towerBot.gatherSourceAndDeliverToTower(bot)
                    break;
                case 'E25N37claimBot':
                    bots.E25N37claimBot.run(bot)
                    break;
                case 'E26N38claimBot':
                    bots.E26N38claimBot.run(bot)
                    break;
                case 'E27N37claimBot':
                    bots.E27N37claimBot.run(bot)
                    break;
                case 'claimBot':
                    bots.E26N38claimBot.run(bot)
                    break;
            }
        }
    }
}

module.exports = bots