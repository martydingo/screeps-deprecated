/* 
    Templated class to make specific workerBots from

*/

bots = require('bots_bots')

class builderBot extends bots.bots {
    constructor(source) {
        super(creep, room)
        this.room = room
    }
    _getConfig() {
        super(this.functionName, this.configTree)
        this.energySource = configTree.source
    }
    build() {
        creep = this.creep
        if (creep.build(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target, {
                visualizePathStyle: {
                    stroke: "#ffffff"
                }
            })
        }
    }
    repair() {
        creep = this.creep
        if (creep.repair(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target, {
                visualizePathStyle: {
                    stroke: "#ffffff"
                }
            })
        }
    }
    gatherSource() {
        creep = this.creep
        energySource = this.configTree.source
        if (creep.withdraw(energySource, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(energySource, {
                visualizePathStyle: {
                    stroke: '#ffaa00'
                }
            })
        } else
        if (creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(energySource, {
                visualizePathStyle: {
                    stroke: '#ffaa00'
                }
            })
        }
    }
    loop() {

    }
}