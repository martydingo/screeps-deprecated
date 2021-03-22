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
const {
    hostiles,
    sources
} = require('./vars')

var bots = {
    "milEngBot": {

        // run: function(creep){
        //     if(creep.room.find(FIND_HOSTILE_STRUCTURES).length == 0){
        //         destination = variables.rooms.E25N37()
        //         if(creep.pos != destination){
        //             creep.moveTo(destination, {visualizePathStyle: {stroke: '#ffffff'}})
        //         }
        //     }
        //     if(creep.room.find(FIND_HOSTILE_STRUCTURES).length > 0){
        //         hostileCreeps = creep.room.find(FIND_HOSTILE_STRUCTURES)
        //         console.log(hostileCreeps[1] + " + " + creep.body[0].type)
        //         if( creep.attack(hostileCreeps[1]) == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(hostileCreeps[1], {visualizePathStyle: {stroke: '#cb4b16'}});
        //         } else {
        //             console.log(creep.name + ': Error, enabling debugging and trying again')
        //             console.log("Error: " + creep.attack(hostileCreeps[0]))
        //         }
        //     }
        // }
        run: function (creep) {
            targetRoomFlag = Game.flags['targetRoomPosition']
            if (creep.pos.roomName != targetRoomFlag.pos.roomName) {
                this.moveTo(creep, targetRoomFlag.pos)
            } else {

            }

        },
        build_rampart: function (creep, rampartRoomPosition) {

        },
        repair_rampart: function (creep) {

        },
        attack: function (creep) {

        },
        moveTo: function (creep, destination) {
            return creep.moveTo(destination)
        }
    },
    "sourceBot": {
        gatherSource: function (creep, source) {
            source = Game.getObjectById(source)

            if (creep.harvest(source) == ERR_NOT_IN_RANGE || ERR_INVALID_TARGET) {
                creep.moveTo(source), {
                    visualizePathStyle: {
                        stroke: '#b58900'
                    }
                }
            }

        },
        deliverSource: function (creep, container) {
            container = Game.getObjectById(container)
            if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container, {
                    visualizePathStyle: {
                        stroke: '#fafafa'
                    }
                })
            }
        },
        run: function (creep, source, container) {
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                bots.sourceBot.gatherSource(creep, source)
            } else {
                bots.sourceBot.deliverSource(creep, container)
            }
        },
        moveIntoSystem: function (creep, room) {
            if (!(room.getRangeTo(creep.pos))) {
                creep.memory.movedIntoSystem = true
            } else {
                //console.log(creep.memory.movedIntoSystem)
                creep.moveTo(room, {
                    visualizePathStyle: {
                        stroke: '#ffffff'
                    }
                })
            }
            _
        },
        "towerBot": {
            gatherSourceAndDeliverToTower: function (creep) {
                tower = variables.structures.towers.E26N37.eastSpawnTower()
                if (creep.store.getUsedCapacity() < 50) {
                    if (creep.withdraw(Game.getObjectById(configuration.bots.feederBots.E26N37.primarySpawn.source), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(Game.getObjectById(configuration.bots.feederBots.E26N37.primarySpawn.source));
                        creep.say("📦")
                    }
                } else if (tower.store[RESOURCE_ENERGY] < tower.store.getCapacity(RESOURCE_ENERGY) - (creep.store.getCapacity(RESOURCE_ENERGY) + 10)) {
                    if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower, {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        })
                        creep.say("🏠")
                    }
                } else {
                    creep.moveTo(Game.flags["Idle Area"])
                    creep.say("Idling")
                }
            },
            run: function (creep) {
                bots.sourceBot.gatherSourceAndDeliverToSpawnerExtensions(creep)
            },
        },
        "E26N38": {
            "primarySource": {
                run: function (creep) {
                    source = configuration.bots.sourceBot.E26N38.primarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E26N38.primarySource.harvestingOptions.container
                    bots.sourceBot.run(creep, source, container)
                }
            },
        },
        "E26N37": {
            "primarySource": {
                run: function (creep) {
                    source = configuration.bots.sourceBot.E26N37.primarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E26N37.primarySource.harvestingOptions.container
                    bots.sourceBot.run(creep, source, container)
                }
            },
            "secondarySource": {
                run: function (creep) {
                    source = configuration.bots.sourceBot.E26N37.secondarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E26N37.secondarySource.harvestingOptions.container
                    bots.sourceBot.run(creep, source, container)
                }
            }
        },
        "E27N38": {
            "primarySource": {
                run: function (creep) {
                    room = new RoomPosition(17, 25, 'E27N38')
                    if (!creep.memory.movedIntoSystem) {
                        bots.sourceBot.moveIntoSystem(creep, room)
                    } else {
                        source = configuration.bots.sourceBot.E27N38.primarySource.harvestingOptions.source
                        container = configuration.bots.sourceBot.E27N38.primarySource.harvestingOptions.container
                        bots.sourceBot.run(creep, source, container)
                    }
                }
            },
            "secondarySource": {
                run: function (creep) {
                    room = new RoomPosition(17, 25, 'E27N38')
                    if (!creep.memory.movedIntoSystem) {
                        bots.sourceBot.moveIntoSystem(creep, room)
                    } else {
                        source = configuration.bots.sourceBot.E27N38.secondarySource.harvestingOptions.source
                        container = configuration.bots.sourceBot.E27N38.secondarySource.harvestingOptions.container
                        bots.sourceBot.run(creep, source, container)
                    }
                }
            }
        },
        "E25N37": {
            "secondarySource": {
                run: function (creep) {
                    source = configuration.bots.sourceBot.E25N37.secondarySource.harvestingOptions.source
                    container = configuration.bots.sourceBot.E25N37.secondarySource.harvestingOptions.container
                    bots.sourceBot.run(creep, source, container)
                }
            }
        }
    },
    "feederBots": {
        "E26N37": {
            "primarySpawn": {
                feedSpawnExtensions: function (creep) {
                    //console.log()
                    if (creep.store[RESOURCE_ENERGY] < 50) {
                        if (creep.withdraw(Game.getObjectById(configuration.bots.feederBots.E26N37.primarySpawn.source), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(Game.getObjectById(configuration.bots.feederBots.E26N37.primarySpawn.source));
                            creep.say("📦")
                        }
                    } else if (variables.spawns.E26N37.primarySpawn().energy < variables.spawns.E26N37.primarySpawn().energyCapacity) {
                        if (creep.transfer(variables.spawns.E26N37.primarySpawn(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(variables.spawns.E26N37.primarySpawn(), {
                                visualizePathStyle: {
                                    stroke: '#ffffff'
                                }
                            })
                            creep.say("📦")
                        }
                    } else if (creep.transfer(variables.structures.extensions.E26N37.notFull()[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(variables.structures.extensions.E26N37.notFull()[0], {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        })
                    } else {
                        creep.moveTo(Game.flags["Feeder Idle Area"])
                        creep.say("Idling")
                    }
                },
                run: function (creep) {
                    bots.feederBots.E26N37.primarySpawn.feedSpawnExtensions(creep)

                }
            }
        },
        "E27N38": {
            "primarySpawn": {
                moveIntoSystem: function (creep, room) {
                    if (!(room.getRangeTo(creep.pos))) {
                        creep.memory.movedIntoSystem = true
                    } else {
                        //console.log(creep.memory.movedIntoSystem)
                        creep.moveTo(room, {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        })
                    }
                },
                feedSpawnExtensions: function (creep) {
                    //console.log()
                    if (creep.store[RESOURCE_ENERGY] < 50) {
                        if (creep.withdraw(Game.getObjectById(configuration.bots.feederBots.E27N38.primarySpawn.source), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(Game.getObjectById(configuration.bots.feederBots.E27N38.primarySpawn.source));
                            creep.say("📦")
                        }
                    } else if (variables.spawns.E27N38.primarySpawn().energy < variables.spawns.E27N38.primarySpawn().energyCapacity) {
                        if (creep.transfer(variables.spawns.E27N38.primarySpawn(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(variables.spawns.E27N38.primarySpawn(), {
                                visualizePathStyle: {
                                    stroke: '#ffffff'
                                }
                            })
                            creep.say("📦")
                        }
                    } else if (creep.transfer(variables.structures.extensions.E27N38.notFull()[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(variables.structures.extensions.E27N38.notFull()[0], {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        })
                    } else {
                        creep.moveTo(Game.flags["E27N38IdleArea"])
                        creep.say("Idling")
                    }
                },
                run: function (creep) {
                    room = new RoomPosition(17, 25, 'E27N38')
                    if (!creep.memory.movedIntoSystem) {
                        this.moveIntoSystem(creep, room)
                    } else {
                        bots.feederBots.E27N38.primarySpawn.feedSpawnExtensions(creep)
                    }
                }
            }
        },
    },
    "upgradeBot": {
        "E26N37": {

            run: function (creep) {
                try {
                    if (creep.store[RESOURCE_ENERGY] == 0) {
                        shouldGoUpgrade = false
                    } else
                    if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                        shouldGoUpgrade = true
                    }
                    if (shouldGoUpgrade == false) {
                        if (variables.structures.storage.E26N37.primary()) {
                            if (variables.structures.storage.E26N37.primary().store.getUsedCapacity([RESOURCE_ENERGY]) > 49) {
                                var container = variables.structures.storage.E26N37.primary();
                                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(container, {
                                        visualizePathStyle: {
                                            stroke: '#b58900'
                                        }
                                    });
                                    creep.say("⛏️")
                                }
                            }
                        } else {
                            var sources = creep.room.find(FIND_SOURCES);
                            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(sources[0]);
                                creep.say("⛏️")
                            }
                        }
                    } else {
                        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(creep.room.controller, {
                                visualizePathStyle: {
                                    stroke: '#cb4b16'
                                }
                            });
                            creep.say("⭐️")
                        }
                    }
                } catch (err) {
                    if (err == "ReferenceError: shouldGoUpgrade is not defined") {
                        //console.log("Initialising shouldGoUpgrade variable")
                        shouldGoUpgrade = false;
                    } else {
                        console.log(err)
                    }
                }
            }
        },
        "E27N38": {

            run: function (creep) {
                room = new RoomPosition(17, 25, 'E27N38')
                if (!creep.memory.movedIntoSystem) {
                    bots.sourceBot.moveIntoSystem(creep, room)
                } else
                    try {
                        if (creep.store[RESOURCE_ENERGY] == 0) {
                            shouldGoUpgrade = false
                        } else
                        if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity(RESOURCE_ENERGY)) {
                            shouldGoUpgrade = true
                        }
                        if (shouldGoUpgrade == false) {
                            if (variables.structures.containers.E27N38.secondarySourceContainer()) {
                                if (variables.structures.storage.E27N38.secondarySourceContainer().store.getUsedCapacity([RESOURCE_ENERGY]) > 49) {
                                    var container = variables.structures.storage.E27N38.secondarySourceContainer();
                                    if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                        creep.moveTo(container, {
                                            visualizePathStyle: {
                                                stroke: '#b58900'
                                            }
                                        });
                                        creep.say("⛏️")
                                    }
                                }
                            } else {
                                var sources = creep.room.find(FIND_SOURCES);
                                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(sources[0]);
                                    creep.say("⛏️")
                                }
                            }
                        } else {
                            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(creep.room.controller, {
                                    visualizePathStyle: {
                                        stroke: '#cb4b16'
                                    }
                                });
                                creep.say("⭐️")
                            }
                        }
                    }
                catch (err) {
                    if (err == "ReferenceError: shouldGoUpgrade is not defined") {
                        //console.log("Initialising shouldGoUpgrade variable")
                        shouldGoUpgrade = false;
                    } else {
                        console.log(err)
                    }
                }
            },
            moveIntoSystem: function (creep, room) {
                if (!(room.getRangeTo(creep.pos))) {
                    creep.memory.movedIntoSystem = true
                } else {
                    //console.log(creep.memory.movedIntoSystem)
                    creep.moveTo(room, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
                _
            }
        }
    },
    "builderBots": {
        "E26N37": {
            run: function (creep) {
                if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
                    creep.memory.building = false;
                    creep.say("⛏️");
                }
                if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
                    creep.memory.building = true;
                    creep.say("🚧");
                }
                if (creep.memory.building) {
                    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                    if (targets.length) {
                        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0], {
                                visualizePathStyle: {
                                    stroke: "#ffffff"
                                }
                            });
                        }
                    } else {
                        creep.moveTo(Game.flags["Idle Area"])
                        creep.say("Idling")
                    }
                } else {
                    var container = variables.structures.storage.E26N37.primary()
                    if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container, {
                            visualizePathStyle: {
                                stroke: '#b58900'
                            }
                        });
                        creep.say("⛏️")
                    }
                }
            }
        },
        "E25N37": {
            run: function (creep) {
                room = new RoomPosition(43, 6, 'E25N37')
                if (!creep.memory.movedIntoSystem) {
                    this.moveIntoSystem(creep, room)
                } else {
                    if (creep.pos.roomName != room.roomName) {
                        creep.memory.movedIntoSystem = false
                    }
                    if (creep.memory.shouldBuild && creep.store[RESOURCE_ENERGY] == 0) {
                        creep.memory.shouldBuild = false;
                    }
                    if (!creep.memory.shouldBuild && creep.store.getFreeCapacity() == 0) {
                        creep.memory.shouldBuild = true;
                    }

                    if (creep.memory.shouldBuild) {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        var targetsRepair = creep.room.find(FIND_STRUCTURES, {
                            filter: object => object.structureType == STRUCTURE_CONTAINER || STRUCTURE_ROAD
                        })
                        if (targets.length) {
                            this.build(creep, targets[0])
                        } else if (targetsRepair.length) {
                            this.repair(creep, targetsRepair[0])
                        } else
                            creep.moveTo(Game.flags['E25N37IdleArea'].pos)
                    } else {
                        this.gatherSource(creep)
                    }
                }
            },

            build: function (creep, target) {
                if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            repair: function (creep, target) {
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            gatherSource: function (creep) {
                container = Game.getObjectById("604699be0eb514496c8e752f") //creep.pos.findClosestByRange(FIND_SOURCES)
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(container, {
                        visualizePathStyle: {
                            stroke: '#ffaa00'
                        }
                    })
                }

            },
            moveIntoSystem: function (creep, room) {
                if (!(room.getRangeTo(creep.pos))) {
                    creep.memory.movedIntoSystem = true
                } else {
                    //console.log(creep.memory.movedIntoSystem)
                    creep.moveTo(room, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
                _
            }
        },
        "E26N38": {
            run: function (creep) {
                room = new RoomPosition(24, 26, 'E26N38')
                if (!creep.memory.movedIntoSystem) {
                    this.moveIntoSystem(creep, room)
                } else {
                    if (creep.pos.roomName != room.roomName) {
                        creep.memory.movedIntoSystem = false
                    }
                    if (creep.memory.shouldBuild && creep.store[RESOURCE_ENERGY] == 0) {
                        creep.memory.shouldBuild = false;
                    }
                    if (!creep.memory.shouldBuild && creep.store.getFreeCapacity() == 0) {
                        creep.memory.shouldBuild = true;
                    }

                    if (creep.memory.shouldBuild) {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        var targetsRepair = creep.room.find(FIND_STRUCTURES, {
                            filter: object => object.structureType == STRUCTURE_CONTAINER
                        })
                        if (targets.length) {
                            this.build(creep, targets[0])
                        } else if (targetsRepair.length) {
                            this.repair(creep, targetsRepair[0])
                        } else
                            creep.moveTo(Game.flags['E26N38IdleArea'].pos)
                    } else {
                        this.gatherSource(creep)
                    }
                }
            },

            build: function (creep, target) {
                if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            repair: function (creep, target) {
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            gatherSource: function (creep) {
                source = creep.pos.findClosestByRange(FIND_SOURCES)
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {
                        visualizePathStyle: {
                            stroke: '#ffaa00'
                        }
                    })
                }

            },
            moveIntoSystem: function (creep, room) {
                if (!(room.getRangeTo(creep.pos))) {
                    creep.memory.movedIntoSystem = true
                } else {
                    //console.log(creep.memory.movedIntoSystem)
                    creep.moveTo(room, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
                _
            }
        },
        "E27N38": {
            run: function (creep) {
                room = new RoomPosition(17, 25, 'E27N38')
                if (!creep.memory.movedIntoSystem) {
                    this.moveIntoSystem(creep, room)
                } else {
                    if (creep.pos.roomName != room.roomName) {
                        creep.memory.movedIntoSystem = false

                    }
                    if (creep.memory.shouldBuild && creep.store[RESOURCE_ENERGY] == 0) {
                        creep.memory.shouldBuild = false;
                    }
                    if (!creep.memory.shouldBuild && creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) {
                        creep.memory.shouldBuild = true;
                    }

                    if (creep.memory.shouldBuild) {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        var targetsRepair = creep.room.find(FIND_STRUCTURES, {
                            filter: object => object.structureType == STRUCTURE_CONTAINER && object.hits < object.hitsMax || object.structureType == STRUCTURE_ROAD && object.hits < object.hitsMax 
                        })
                        if (targets.length) {
                            this.build(creep, targets)
                        } else if (targetsRepair.length) {
                            this.repair(creep, targetsRepair[0])
                        } else
                            creep.moveTo(Game.flags['E27N38IdleArea'].pos)
                    } else {
                        this.gatherSource(creep)
                    }
                }
            },

            build: function (creep, target) {
                if (creep.build(target[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0], {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            repair: function (creep, target) {
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: "#ffffff"
                        }
                    });
                }
            },

            gatherSource: function (creep) {
                source = Game.getObjectById("60491c6bd2b0860bfb1bd4dd") //creep.pos.findClosestByRange(FIND_SOURCES) //Game.getObjectById("60491c6bd2b0860bfb1bd4dd")
                if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {
                        visualizePathStyle: {
                            stroke: '#ffaa00'
                        }
                    })
                }

            },
            moveIntoSystem: function (creep, room) {
                if (!(room.getRangeTo(creep.pos))) {
                    creep.memory.movedIntoSystem = true
                } else {
                    //console.log(creep.memory.movedIntoSystem)
                    creep.moveTo(room, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
                _
            }
        }
    },
    "repairBot": {
        run: function (creep) {
            room = new RoomPosition(6, 44, 'E27N38')
            if (!creep.memory.movedIntoSystem) {
                this.moveIntoSystem(creep, room)
            } else
                try {
                    if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
                        shouldGoRepair = true
                    }
                    if (creep.store.getUsedCapacity() < 8) {
                        shouldGoRepair = false
                    }
                    if (shouldGoRepair == false) {
                        if (creep.harvest(variables.sources.E26N37.primary()) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(variables.sources.E26N37.primary(), {
                                visualizePathStyle: {
                                    stroke: '#ffaa00'
                                }
                            });
                            creep.say("⛏️ Mine")
                        }
                    } else if (shouldGoRepair) {
                        var repairJobs = variables.structures.unrepairedRampartsWalls1k()
                        if (repairJobs.length > 0) {
                            if (creep.repair(repairJobs[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(repairJobs[0], {
                                    visualizePathStyle: {
                                        stroke: '#ffffff'
                                    }
                                });
                                creep.say("🔨 Repair")
                            }
                        }
                        //console.log(repairJobs.length)
                        else {
                            creep.moveTo(Game.flags["Idle Area"])
                            creep.say("Idling")
                        }
                    }
                }
            catch (err) {
                if (err == "ReferenceError: shouldGoRepair is not defined") {
                    //console.log("Initialising shouldGoRepair variable")
                    shouldGoRepair = false;
                } else {
                    console.log(err)
                }
            }
        },
        moveIntoSystem: function (creep, room) {
            if (!(room.getRangeTo(creep.pos))) {
                creep.memory.movedIntoSystem = true
            } else {
                //console.log(creep.memory.movedIntoSystem)
                creep.moveTo(room, {
                    visualizePathStyle: {
                        stroke: '#ffffff'
                    }
                })
            }
            _
        }
    },
    "lootBot": {
        run: function (creep) {
            if (creep.store[RESOURCE_ENERGY] == 0) {
                target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                if (target) {
                    if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        });
                    }
                }
            } else if (x = creep.transfer(variables.structures.storage.E26N37.primary(), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(variables.structures.storage.E26N37.primary())
            } else if (creep.transfer(variables.structures.storage.E26N37.primary(), RESOURCE_GHODIUM_OXIDE) == ERR_NOT_IN_RANGE) {
                creep.moveTo(variables.structures.storage.E26N37.primary())
            } else {
                creep.moveTo(Game.flags['Idle Area'])
            }
        }
    },
    "claimBots": {
        "E27N38_claimBot": {
            run: function (creep) {
                if (configuration.bots.claimBots.E27N38.claimTarget != "") {
                    claimTargetID = configuration.bots.claimBots.E27N38.claimTarget
                    claimTarget = Game.getObjectById(claimTargetID)
                    claimResult = creep.claimController(claimTarget)
                    if (claimResult == ERR_NOT_IN_RANGE) {
                        creep.moveTo(claimTarget, {
                            visualizePathStyle: {
                                stroke: '#cb4b16'
                            }
                        })
                    } else if (claimResult == ERR_INVALID_TARGET) {
                        creep.moveTo(new RoomPosition(46, 4, 'E27N38'), {
                            visualizePathStyle: {
                                stroke: '#ffffff'
                            }
                        })
                    }
                }
            }
        },
    },
    "E25N37claimBot": {
        run: function (creep) {
            if (configuration.bots.E25N37claimBot.claimTarget != "") {
                claimTargetID = configuration.bots.E25N37claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                claimResult = creep.reserveController(claimTarget)
                if (claimResult == ERR_NOT_IN_RANGE) {
                    creep.moveTo(claimTarget, {
                        visualizePathStyle: {
                            stroke: '#cb4b16'
                        }
                    })
                } else if (claimResult == ERR_INVALID_TARGET) {
                    creep.moveTo(new RoomPosition(46, 4, 'E25N37'), {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
            }
        }
    },
    "E26N38claimBot": {
        run: function (creep) {
            if (configuration.bots.E26N38claimBot.claimTarget != "") {
                claimTargetID = configuration.bots.E26N38claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                console.log(claimTarget)
                claimResult = creep.reserveController(claimTarget)
                if (claimResult == ERR_NOT_IN_RANGE) {
                    creep.moveTo(claimTarget, {
                        visualizePathStyle: {
                            stroke: '#cb4b16'
                        }
                    })
                } else if (claimResult == ERR_INVALID_TARGET) {
                    console.log(claimResult)
                    creep.moveTo(new RoomPosition(30, 47, 'E26N38'), {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
            }
        }

    },
    "E27N37claimBot": {
        run: function (creep) {
            if (configuration.bots.E27N37claimBot.claimTarget != "") {
                claimTargetID = configuration.bots.E27N37claimBot.claimTarget
                claimTarget = Game.getObjectById(claimTargetID)
                console.log(claimTarget)
                claimResult = creep.reserveController(claimTarget)
                if (claimResult == ERR_NOT_IN_RANGE) {
                    creep.moveTo(claimTarget)
                } else if (claimResult == ERR_INVALID_TARGET) {
                    console.log(claimResult)
                    creep.moveTo(new RoomPosition(8, 15, 'E27N37'), {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    })
                }
            }
        }

    },
    "transportBots": {
        travelAndPickUp: function (creep, src, resource_type) {
            src = Game.getObjectById(src)
            if (creep.withdraw(src, resource_type) == ERR_NOT_IN_RANGE) {
                creep.moveTo(src, {
                    visualizePathStyle: {
                        stroke: '#00aaff'
                    }
                })
            }
        },
        travelAndDropOff: function (creep, dst) {
            dst = Game.getObjectById(dst)
            if (creep.transfer(dst, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(dst, {
                    visualizePathStyle: {
                        stroke: '#aaff00'
                    }
                })
            }

        },
        "E26N38": {
            "sourceOneToStorage": {
                run: function (creep) {
                    src = configuration.bots.transportBot.E26N38.sourceOneToStorage.route.source
                    dst = configuration.bots.transportBot.E26N38.sourceOneToStorage.route.destination
                    resource_type = RESOURCE_ENERGY
                    if (creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)) {
                        bots.transportBots.travelAndPickUp(creep, src, resource_type)
                    } else {
                        bots.transportBots.travelAndDropOff(creep, dst)
                    }
                }
            },
        },
        "E26N37": {
            "sourceOneToStorage": {
                run: function (creep) {
                    src = configuration.bots.transportBot.E26N37.sourceOneToStorage.route.source
                    dst = configuration.bots.transportBot.E26N37.sourceOneToStorage.route.destination
                    resource_type = RESOURCE_ENERGY

                    if (creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)) {
                        bots.transportBots.travelAndPickUp(creep, src, resource_type)
                    } else {
                        bots.transportBots.travelAndDropOff(creep, dst)
                    }
                }
            },
            "sourceTwoToStorage": {
                run: function (creep) {
                    src = configuration.bots.transportBot.E26N37.sourceTwoToStorage.route.source
                    dst = configuration.bots.transportBot.E26N37.sourceTwoToStorage.route.destination
                    resource_type = RESOURCE_ENERGY

                    if (creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)) {
                        bots.transportBots.travelAndPickUp(creep, src, resource_type)
                    } else {
                        bots.transportBots.travelAndDropOff(creep, dst)
                    }
                }
            }
        },
        "E25N37": {
            "sourceOneToStorage": {
                run: function (creep) {
                    src = configuration.bots.transportBot.E25N37.sourceOneToStorage.route.source
                    dst = configuration.bots.transportBot.E25N37.sourceOneToStorage.route.destination
                    resource_type = RESOURCE_ENERGY

                    if (creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)) {
                        bots.transportBots.travelAndPickUp(creep, src, resource_type)
                    } else {
                        bots.transportBots.travelAndDropOff(creep, dst)
                    }
                }
            },
            "sourceTwoToStorage": {
                run: function (creep) {
                    src = configuration.bots.transportBot.E25N37.sourceTwoToStorage.route.source
                    dst = configuration.bots.transportBot.E25N37.sourceTwoToStorage.route.destination
                    resource_type = RESOURCE_ENERGY

                    if (creep.store[resource_type] < creep.store.getCapacity(RESOURCE_ENERGY)) {
                        bots.transportBots.travelAndPickUp(creep, src, resource_type)
                    } else {
                        bots.transportBots.travelAndDropOff(creep, dst)
                    }
                }
            }
        }

    },

    botDaemon: function () {
        for (var creep in Game.creeps) {
            var botFunction = Memory.creeps[creep].function
            bot = Game.creeps[creep]

            switch (botFunction) {
                case 'feederBot_primarySpawn':
                    bots.feederBots.E26N37.primarySpawn.run(bot)
                    break;
                case 'feederBot_E27N38_primarySpawn':
                    bots.feederBots.E27N38.primarySpawn.run(bot)
                    break;
                case 'feederBot_E27N38':
                    bots.feederBots.E27N38.primarySpawn.run(bot)
                    break;
                case 'sourceBot_sS':
                    bots.sourceBot.E26N37.secondarySource.run(bot)
                    break;
                case 'sourceBot_E25N37_sS':
                    bots.sourceBot.E25N37.secondarySource.run(bot)
                    break;
                case 'sourceBot_E26N38_pS':
                    bots.sourceBot.E26N38.primarySource.run(bot)
                    break;
                case 'sourceBot_E26N37_pS':
                    bots.sourceBot.E26N37.primarySource.run(bot)
                    break;
                case 'sourceBot_E26N37_sS':
                    bots.sourceBot.E26N37.secondarySource.run(bot)
                    break;
                case 'sourceBot_E27N38_pS':
                    bots.sourceBot.E27N38.primarySource.run(bot)
                    break;
                case 'sourceBot_E27N38_sS':
                    bots.sourceBot.E27N38.secondarySource.run(bot)
                    break;
                case 'upgradeBot_E26N37':
                    //bots.transportBots.E26N37.sourceOneToStorage.run(bot)
                    bots.upgradeBot.E26N37.run(bot)
                    break;
                case 'upgradeBot_E27N38':
                    //bots.transportBots.E27N38.sourceOneToStorage.run(bot)
                    bots.upgradeBot.E27N38.run(bot)
                    break;
                case 'builderBot_E26N37':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBots.E26N37.run(bot)
                    break;
                case 'builderBot_E27N38':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBots.E27N38.run(bot)
                    break;
                case 'builderBot_E26N38':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBots.E26N38.run(bot)
                    break;
                case 'builderBot_E27N38':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBots.E27N38.run(bot)
                    break;
                case 'builderBot_E25N37':
                    //bots.sourceBot.secondarySource.run(bot)
                    bots.builderBots.E25N37.run(bot)
                    break;
                case 'repairBot':
                    bots.repairBot.run(bot)
                    break;
                case 'lootBot':
                    bots.lootBot.run(bot)
                    ///bots.transportBots.E26N37.sourceOneToStorage.run(bot)
                    break;
                case 'transportBot_pS_to_sT_E26N38':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N38.sourceOneToStorage.run(bot)
                    break;
                case 'transportBot_pS_to_sT_E26N37':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N37.sourceOneToStorage.run(bot)
                    break;
                case 'transportBot_sS_to_sT_E26N37':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E26N37.sourceTwoToStorage.run(bot)
                    break;
                case 'transportBot_sS_to_sT_E25N37':
                    //bots.transportBot_E26N37_sourceOneToStorage.run(bot)
                    bots.transportBots.E25N37.sourceTwoToStorage.run(bot)
                    break;
                case 'milEngBot':
                    bots.milEngBot.run(bot)
                    break;
                case 'towerBot':
                    bots.sourceBot.towerBot.gatherSourceAndDeliverToTower(bot)
                    //bots.transportBots.E26N37.sourceOneToStorage.run(bot)
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
                case 'E27N38_claimBot':
                    bots.claimBots.E27N38_claimBot.run(bot)
                    break;
                case 'claimBot':
                    bots.E26N38claimBot.run(bot)
                    break;
            }
        }
    }
}

module.exports = bots