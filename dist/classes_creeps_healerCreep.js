class classes_creeps_healerCreep {
    constructor(roomName, partsArray){

        this.room = Game.rooms[roomName]
        this.partsArray = partsArray || [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL]
        this.creepName = 'healerCreep\['+this.roomName+'\]-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.targetCreeps = this.targetCreeps
        this.targetCreep = this.targetCreep
        this.result = this.result
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'healerCreep',
                        creepRoom: this.roomName,
                        creepParts: this.partsArray
                    }
                })
            )
            return this.result
        }

    }

    canSpawn(spawner){
        if(spawner.spawnCreep(this.partsArray,this.creepName, { dryRun: true }) == 0){
            return true
        } else
        return false
    }
    
    heal(creep, targetCreep){
        if(creep.pos.inRangeTo(targetCreep,1)){
            this.result = creep.heal(creep)
        } else {
            creep.moveTo(targetCreep)
            if(creep.pos.inRangeTo(targetCreep,3)){
                this.result = creep.rangedHeal(creep)
            }
            
        }
    }
        
    follow(creep, targetCreep){
        creep.moveTo(targetCreep.pos)
    }
    
    run(creep){
        console.log(this.targetCreeps)
        this.targetCreeps = _.filter(Game.creeps, creep => creep.memory.creepClass == "warriorCreep")
        if(this.targetCreeps.length > 0){
            this.targetCreep = this.targetCreeps[0]
    
            if(creep.pos.inRangeTo(this.targetCreep.pos, 1) == false){
                this.follow(creep,this.targetCreep)
            } else {
                this.heal(creep, this.targetCreep)
            }
        }

    }

}

module.exports = classes_creeps_healerCreep