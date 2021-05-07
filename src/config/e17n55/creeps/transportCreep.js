var config_e17n55_creeps_transportCreep = {
    storageViaSrcTwoContainer: {
        creepOrigin: Game.getObjectById('60871e0f59886d6f70b5d713') || {
            id: null,
        },
        creepDestination: Game.rooms['E17N55'].storage,
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
    },
    labViaStorage: {
        creepOrigin: Game.rooms['E17N55'].storage,
        creepDestination: Game.getObjectById('606a0fa296af2a502a7be7c7'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepRemoteLimit: 2000,
        creepResourceType: RESOURCE_ENERGY,
    },
    spawnerViaStorage: {
        creepOrigin: Game.rooms['E17N55'].storage,
        creepDestination: Game.spawns['E17N55SPA1'],
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
    },
    linkViaStorage: {
        creepOrigin: Game.rooms['E17N55'].storage,
        creepDestination: Game.getObjectById('60642449e030746567b3178e'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
    },
    terminalViaLink: {
        creepOrigin: Game.getObjectById('60830e9bdbf3497cb2220f46') || {
            id: null,
        },
        creepDestination: Game.getObjectById('608b7d022ba9ac9e4bcb1aec'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepRemoteLimit: 20000,
        creepResourceType: RESOURCE_ENERGY,
    },
    factoryViaLink: {
        creepOrigin: Game.getObjectById('60830e9bdbf3497cb2220f46') || {
            id: null,
        },
        creepDestination: Game.getObjectById('608ca2c5b7552f13fad1e4b0'),
        creepParts: [MOVE, CARRY, MOVE, CARRY],
        creepRemoteLimit: 600,
        creepResourceType: RESOURCE_ENERGY,
    },
}

module.exports = config_e17n55_creeps_transportCreep
