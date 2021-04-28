var utils_creeps_renew = {
    renewCreep: function (creep, spawn) {
        results = spawn.renewCreep(creep)
        if (results == ERR_NOT_IN_RANGE || ERR_BUSY) {
            creep.moveTo(spawn)
        }
        if (results == ERR_BUSY) {
            spawn.memory.spawnBlocked = creep.id
        }
        if (results == 0) {
            if (spawn.memory.spawnBlocked == creep.id) {
                delete spawn.memory.spawnBlocked
            }
        }
    },
}

module.exports = utils_creeps_renew
