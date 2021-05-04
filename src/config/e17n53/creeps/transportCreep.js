var config_e17n53_creeps_transportCreep = {
    terminalViaStorage: {
        creepOrigin: Game.rooms['E17N53'].storage,
        creepDestination: Game.rooms['E17N53'].terminal,
        creepParts: [MOVE, MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
        creepRemoteLimit: 2000,
    },
}

module.exports = config_e17n53_creeps_transportCreep
