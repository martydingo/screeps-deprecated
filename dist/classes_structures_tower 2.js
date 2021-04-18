class classes_structures_tower {
    constructor(tower){
        this.tower = tower
        this.injuredCreeps = this.injuredCreeps
        this.hostileCreeps = this.hostileCreeps
        this.unrepairedStructures = this.unrepairedStructures
        this.unrepairedStructuresUnsorted = this.unrepairedStructuresUnsorted
    }
    healTarget(target) {
        tower = this.tower
        this.result = tower.heal(target)
        return this.result
    }
    attackTarget(target) {
        tower = this.tower
        this.result = tower.attack(target)
        return this.result

    }
    repairTarget(target) {
        tower = this.tower
        this.result = tower.repair(target)
        return this.result
    }
    run() {
        this.injuredCreeps = this.tower.room.find(FIND_MY_CREEPS, { filter: creep => creep.hits < creep.hitsMax })
        this.hostileCreeps = this.tower.room.find(FIND_HOSTILE_CREEPS)
        this.unrepairedStructuresUnsorted = this.tower.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax && object.structureType == STRUCTURE_CONTAINER || object.hits < object.hitsMax && object.structureType == STRUCTURE_TOWER || object.hits < object.hitsMax && object.structureType == STRUCTURE_ROAD || object.hits < 100000 && object.hits < object.hitsMax && object.structureType == STRUCTURE_RAMPART || object.hits < 100000 && object.hits < object.hitsMax && object.structureType == STRUCTURE_WALL
        })
        
        this.unrepairedStructures = this.unrepairedStructuresUnsorted.sort(function (a, b) {
            return a.hits - b.hits
        })
        //console.log(this.unrepairedStructures[0])

        if (this.hostileCreeps.length > 0) {
            this.result = this.attackTarget(this.hostileCreeps[0])
            if (this.result == -6) {
                console.log("Tower at location: " + tower.pos + " does not have energy to attack!")
            }
        } else if (this.injuredCreeps.length > 0) {
            this.result = this.healTarget(this.injuredCreeps[0])
            if (this.result = -6) {
                console.log("Tower at location: " + tower.pos + " does not have energy to heal!")
            }
        } else if (this.unrepairedStructures.length > 0) {
            this.result = this.repairTarget(this.unrepairedStructures[0])
            if (this.result == -6) {
                console.log("Tower at location: " + tower.pos + " does not have energy to repair!")
            }
        }
    }
}

module.exports = classes_structures_tower