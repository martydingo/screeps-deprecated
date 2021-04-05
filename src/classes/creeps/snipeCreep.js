class classes_creeps_snipeCreep {
    constructor(snipePos, roomName, partsArray){

        this.room = Game.rooms[roomName]
        this.snipePos = snipePos
        this.partsArray = partsArray || [RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE]
        this.creepName = 'snipeCreep\['+this.roomName+'\]-'
        this.targetController = this.targetController
        this.roomController = this.roomController
        this.inPosition = this.inPosition
        this.result = this.result
        this.badGuys = this.badGuys
    }

    spawnCreep(spawner){
        if(this.canSpawn(spawner) == true){
            this.result = (
                spawner.spawnCreep(this.partsArray,this.creepName+Game.time, {
                    memory: {
                        creepClass: 'snipeCreep',
                        creepRoom: this.room.name,
                        creepParts: this.partsArray
                    }
                })
            )
            return this.result
        }

    }

    canSpawn(spawner){
        this.result = spawner.spawnCreep(this.partsArray,this.creepName, { dryRun: true })
        console.log(this.result)
        if(this.result == 0){
            return true
        } else
        return false
    }
    
    rangedAttack(creep){
        this.badGuys = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 4)
        if(this.badGuys.length > 0){
            this.result = creep.rangedAttack(this.badGuys[0])
            console.log('Attack result: ' + this.result)
        }
    }
    
    run(creep){
        if(creep.pos.getRangeTo(this.snipePos) > 1){
            creep.moveTo(this.snipePos)
        } else {
            this.rangedAttack(creep)
        }

    }
}

module.exports = classes_creeps_snipeCreep