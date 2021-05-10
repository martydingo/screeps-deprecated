var config_e17n53_creeps_transportCreep = {
    terminalViaStorage: {
        creepOrigin: Game.rooms['E17N53'].storage,
        creepDestination: Game.rooms['E17N53'].terminal,
        creepParts: [MOVE, MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
        creepRemoteLimit: 2000,
    },
    linkViaStorage: {
        creepOrigin: Game.rooms['E17N53'].storage,
        creepDestination: Game.getObjectById('6070fac536fbffe60ae42d35'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepResourceType: RESOURCE_ENERGY,
    },
    terminalViaLink: {
        creepOrigin: Game.getObjectById('6071ae0ff5e10e6714bbd05c') || {
            id: null,
        },
        creepDestination: Game.getObjectById('6071a510015f30575a4c36c5'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepRemoteLimit: 20000,
        creepResourceType: RESOURCE_ENERGY,
    },
    labViaTerminal: {
        creepOrigin: Game.rooms['E17N53'].terminal,
        creepDestination: Game.getObjectById('608a25788227a443ccb8e792'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepRemoteLimit: 2400,
        creepResourceType: RESOURCE_CATALYZED_GHODIUM_ACID,
    },
    mistTerminalViaStorage: {
        creepOrigin: Game.rooms['E17N53'].storage,
        creepDestination: Game.getObjectById('6071a510015f30575a4c36c5'),
        creepParts: [MOVE, CARRY, CARRY, CARRY, CARRY],
        creepRemoteLimit: 20000,
        creepResourceType: RESOURCE_MIST,
    },
}

module.exports = config_e17n53_creeps_transportCreep
