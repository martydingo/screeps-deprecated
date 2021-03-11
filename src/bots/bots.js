class bots{
    constructor(creep,room){
        this.creep = creep
        this.room = room
        
    }
    _getConfig(){
        this.configTree = configuration.bots.builderBots.room
        this.functionName = configTree.function
        if (!configTree.maxActive) {
            console.log("Configuration not found for " + creep.name)
        }
    }
    moveIn(){
        creep = this.creep
        room = this.room
        if(!(room.getRangeTo( creep.pos ))){
            creep.memory.movedIntoSystem = true
        } else 
        {
            //console.log(creep.memory.movedIntoSystem)
            creep.moveTo(room, {visualizePathStyle: {stroke: '#ffffff'}})
        }_
    }
}