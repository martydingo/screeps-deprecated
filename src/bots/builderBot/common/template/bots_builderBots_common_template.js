/* 
    Templated class to make specific workerBots from

*/

class builderBot {
    constructor(room){
        this.room = room
    }
    _getConfig(){
        configTree = 'configuration.bots.builderBots.' + room + '.'
        energySource = configTree + 'source'
    }
}