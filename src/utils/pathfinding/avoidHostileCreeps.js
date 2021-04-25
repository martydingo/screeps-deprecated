var utils_pathfinding_avoidHostileCreeps = {
    findPath: function(creep,destination){
        let goals = destination

        let ret = PathFinder.search(
          creep.pos, goals,
          {
            plainCost: 1,
            swampCost: 5,
            roomCallback: function(roomName) {
              
              let costs = new PathFinder.CostMatrix;
              // Avoid E19N51
              if(roomName == 'E19N51' || roomName == 'E19N48'){
                x = 0
                y = 0
                while(x < 50){
                  while(y < 50){
                    costs.set(x, y, 0xff)
                    y++
                  }
                x++
                }
              }
              
              let room = Game.rooms[roomName];
              if (!room) return;


              room.find(FIND_STRUCTURES).forEach(function(structure) {
                costs.set(structure.pos.x, structure.pos.y, 0xff);
              });
  
              room.find(FIND_MY_CREEPS).forEach(function(structure) {
                costs.set(structure.pos.x, structure.pos.y, 0xff);
              });
  
              // Avoid creeps in the room
              room.find(FIND_HOSTILE_CREEPS).forEach(function(creep) {
                x = -4
                y = -4
                while(x < 4){
                  while(y < 4){
                    costs.set(creep.pos.x, creep.pos.y, 0xff)
                    y++
                  }
                x++
                }
              });
      
              return costs;
            },
          }
        )
      
        if(ret.incomplete == true){
            console.log(creep.name+' - WARNING: Could not pathfind a complete path!')
        }
        let pos = ret.path[0];
        let path = ret.path;
        //console.log(JSON.stringify(ret.path))
        return pos
    }
}

module.exports = utils_pathfinding_avoidHostileCreeps