const structures = require('./structures')

// Configuration Import
bots = require('bots')
configuration = require('config')
variables = require('vars')
utilities = require('utils')
respawn = require('respawn')
varStructures = require('structures')
visual = require('visual')

module.exports.loop = function () {
    //console.log()
    //console.log(variables.structures.towers.E26N37.eastSpawnTower())    
    try{
        respawn.respawnDaemon()
    }
    catch(err){
        console.log(err)
    }
    bots.botDaemon()
    try{
    }
    catch(err){
        console.log(err)
    }
    try{
        utilities.garbageCollection.run()
    }
    catch(err){
        console.log(err)
    }
    try{
        varStructures.towers.runDaemon()
    }
    catch(err){
        console.log(err)
    }
    try{
        visual.room.paint()
    }
    catch(err){
        console.log(err)
    }
}