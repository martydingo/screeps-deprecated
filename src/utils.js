/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('utils');
 * mod.thing == 'a thing'; // true
 */

var utils = {
    "garbageCollection": {
        "creeps": {
            run: function () {
                for (var name in Memory.creeps) {
                    if (!Game.creeps[name]) {
                        delete Memory.creeps[name];
                        console.log('Clearing non-existing creep memory:', name);
                    }
                }
            }
        },
        run: function () {
            utils.garbageCollection.creeps.run()
        }
    }
}

module.exports = utils