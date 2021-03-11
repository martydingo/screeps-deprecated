/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('structures');
 * mod.thing == 'a thing'; // true
 */

variables = require('vars')

var varStructures = {
    "towers":{
        "E26N37":{
            "eastSpawnTower":{
                healTarget: function(target){
                    tower = variables.structures.towers.E26N37.eastSpawnTower()
                    result = tower.heal(target)
                    return result
                },
                attackTarget: function(target){
                    tower = variables.structures.towers.E26N37.eastSpawnTower()
                    result = tower.attack(target)
                    return result
                    
                },
                repairTarget: function(target){
                    tower = variables.structures.towers.E26N37.eastSpawnTower()
                    result = tower.repair(target)
                    return result
                },
                runDaemon: function(){
                    tower = variables.structures.towers.E26N37.eastSpawnTower()
                    injuredCreeps = variables.bots.injuredBots.E26N37()
                    hostileCreeps = variables.hostiles.E26N37.creeps.all()
                    unrepairedStructures = variables.structures.unrepairedStructures().sort(function(a,b){ return a.hits - b.hits})
                    //console.log(unrepairedStructures[0])

                    if(hostileCreeps.length>0){
                    result = varStructures.towers.E26N37.eastSpawnTower.attackTarget(hostileCreeps[0])
                        if(result == -6){
                            console.log("Tower at location: " + tower.pos  + " does not have energy to attack!")
                        }
                    } else if(injuredCreeps.length>0){
                        result = varStructures.towers.E26N37.eastSpawnTower.healTarget(injuredCreeps[0])
                        if(result = -6){
                            console.log("Tower at location: " + tower.pos  + " does not have energy to heal!")
                        }
                    } else if(unrepairedStructures.length>0){
                        result = varStructures.towers.E26N37.eastSpawnTower.repairTarget(unrepairedStructures[0])
                        if(result == -6){
                            console.log("Tower at location: " + tower.pos  + " does not have energy to repair!")
                        }
                    }
                }
            }
        },
        runDaemon: function(){
            varStructures.towers.E26N37.eastSpawnTower.runDaemon()
        }
    }
}

module.exports = varStructures