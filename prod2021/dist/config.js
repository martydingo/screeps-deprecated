/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('config');
 * mod.thing == 'a thing'; // true
 */

var config = {
    "bots": {
        "sourceBot": {
            "E26N38": {
                "primarySource": {
                    "function": "sourceBot_E26N38_pS",
                    "shortName": "sourceBot_E26N38_pS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae6d9099fc012e63903e",
                        "container": "6047dcf385ea2dc0fa8cd443"
                    }
                },
            },
            "E26N37": {
                "primarySource": {
                    "function": "sourceBot_E26N37_pS",
                    "shortName": "sourceBot_E26N37_pS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae6d9099fc012e639040",
                        "container": "60454b44d01f449ddb09e888"
                    }
                },
                "secondarySource": {
                    "function": "sourceBot_E26N37_sS",
                    "shortName": "sourceBot_E26N37_sS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae6d9099fc012e639042",
                        "container": "604539e92b8dcd81a2480a36"
                    }
                },
            },
            "E27N38": {
                "primarySource": {
                    "function": "sourceBot_E27N38_pS",
                    "shortName": "sourceBot_E27N38_pS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae7b9099fc012e639266",
                        "container": "60491c6bd2b0860bfb1bd4dd"
                    }
                },
                "secondarySource": {
                    "function": "sourceBot_E27N38_sS",
                    "shortName": "sourceBot_E27N38_sS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae7b9099fc012e639267",
                        "container": "60491678b99cbc1aa85079e6"
                    }
                },
            },
            "E25N37": {
                "primarySource": {
                    "function": "sourceBot_E25N37_pS",
                    "shortName": "sourceBot_E25N37_pS",
                    "maxActive": "0",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae5f9099fc012e638e21",
                        "container": "60454b44d01f449ddb09e888"
                    }
                },
                "secondarySource": {
                    "function": "sourceBot_E25N37_sS",
                    "shortName": "sourceBot_sS",
                    "maxActive": "1",
                    "priorityEnabled": "false",
                    "harvestingOptions": {
                        "source": "5bbcae5f9099fc012e638e22",
                        "container": "604699be0eb514496c8e752f"
                    }
                },
            },
        },
        "upgradeBot": {
            "E26N37": {
                "function": "upgradeBot_E26N37",
                "shortName": "upgradeBot_E26N37",
                "maxActive": "1",
                "priorityEnabled": "false",
                "source": "60428c280c8afa75ac8a9980"
            },
            "E27N38": {
                "function": "upgradeBot_E27N38",
                "shortName": "upgradeBot_E27N38",
                "maxActive": "1",
                "priorityEnabled": "false",
                "source": "60428c280c8afa75ac8a9980"
            },
        },
        "builderBots": {
            "E26N37": {
                "function": "builderBot_E26N37",
                "shortName": "builderBot_E26N37",
                "maxActive": "0",
                "priorityEnabled": "false",
            },
            "E25N37": {
                "function": "builderBot_E25N37",
                "shortName": "builderBot_E25N37",
                "maxActive": "1",
                "priorityEnabled": "false",
            },
            "E26N38": {
                "function": "builderBot_E26N38",
                "shortName": "builderBot_E26N38",
                "maxActive": "1",
                "priorityEnabled": "false",
            },
            "E27N38": {
                "function": "builderBot_E27N38",
                "shortName": "builderBot_E27N38",
                "maxActive": "1",
                "priorityEnabled": "false",
            },
        },
        "repairBot": {
            "function": "repairBot",
            "shortName": "repairBot",
            "maxActive": "0",
        },
        "lootBot": {
            "function": "lootBot",
            "shortName": "lootBot",
            "maxActive": "1",
        },
        "towerBot": {
            "function": "towerBot",
            "shortName": "towerBot",
            "maxActive": "1",
        },
        "milEngBot": {
            "function": "milEngBot",
            "shortName": "milEngBot",
            "maxActive": "0",
        },
        "transportBot": {
            "E26N38": {
                "sourceOneToStorage": {
                    "function": "transportBot_pS_to_sT_E26N38",
                    "shortName": "transportBot_pS_to_sT",
                    "maxActive": "1",
                    "route": {
                        "source": "6047dcf385ea2dc0fa8cd443",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                },
            },
            "E26N37": {
                "sourceOneToStorage": {
                    "function": "transportBot_pS_to_sT_E26N37",
                    "shortName": "transportBot_pS_to_sT",
                    "maxActive": "1",
                    "route": {
                        "source": "60454b44d01f449ddb09e888",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                },
                "sourceTwoToStorage": {
                    "function": "transportBot_sS_to_sT_E26N37",
                    "shortName": "transportBot_sS_to_sT",
                    "maxActive": "1",
                    "route": {
                        "source": "604539e92b8dcd81a2480a36",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                }
            },
            "E27N38": {
                "sourceOneToStorage": {
                    "function": "transportBot_pS_to_sT_E27N38",
                    "shortName": "transportBot_pS_to_sT",
                    "maxActive": "0",
                    "route": {
                        "source": "60454b44d01f449ddb09e888",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                },
                "sourceTwoToStorage": {
                    "function": "transportBot_sS_to_sT_E27N38",
                    "shortName": "transportBot_sS_to_sT",
                    "maxActive": "0",
                    "route": {
                        "source": "604539e92b8dcd81a2480a36",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                }
            },
            "E25N37": {
                "sourceOneToStorage": {
                    "function": "transportBot_pS_to_sT_E26N37",
                    "shortName": "transportBot_pS_to_sT",
                    "maxActive": "0",
                    "route": {
                        "source": "60454b44d01f449ddb09e888",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                },
                "sourceTwoToStorage": {
                    "function": "transportBot_sS_to_sT_E25N37",
                    "shortName": "transportBot_sS_to_sT",
                    "maxActive": "1",
                    "route": {
                        "source": "604699be0eb514496c8e752f",
                        "destination": "60448d520c8afa4b168b5e52",
                    }
                }
            }
        },
        "feederBots": {
            "E26N37": {
                "primarySpawn": {
                    "function": "feederBot_primarySpawn",
                    "shortName": "feederBot_pS",
                    "maxActive": "4",
                    "source": "60448d520c8afa4b168b5e52",
                }
            },
            "E27N38": {
                "primarySpawn": {
                    "function": "feederBot_E27N38_primarySpawn",
                    "shortName": "feederBot_pS",
                    "maxActive": "0",
                    "source": "60491c6bd2b0860bfb1bd4dd",
                }
            }
        },
        "claimBots": {
            "E27N38": {
                "function": "E27N38_claimBot",
                "shortName": "E27N38_claimBot",
                "maxActive": "0",
                "claimTarget": "5bbcae7b9099fc012e639268"
            }
        },
        "E25N37claimBot": {
            "function": "E25N37claimBot",
            "shortName": "E25N37claimBot",
            "maxActive": "1",
            "claimTarget": "5bbcae5f9099fc012e638e23"
        },
        "E26N38claimBot": {
            "function": "E26N38claimBot",
            "shortName": "E26N38claimBot",
            "maxActive": "0",
            "claimTarget": "5bbcae6d9099fc012e63903d"
        },
        "E27N37claimBot": {
            "function": "E27N37claimBot",
            "shortName": "E27N37claimBot",
            "maxActive": "0",
            "claimTarget": "5bbcae7b9099fc012e63926a"
        },
        "renewWhenTTLBelow": "100",
        "returnWhenTTLAbove": "1400",
        "priorityEnabled": "true",
    }
}


module.exports = config