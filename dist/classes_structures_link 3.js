class classes_structures_link {
    constructor(link, remoteLink, roomName){
        this.room = Game.rooms[roomName]
        this.link = link
        this.remoteLink = remoteLink
        this.result = this.result
        this.remoteLink = remoteLink
    }

    transmitLinkWhenFull(){
        if(this.link.store[RESOURCE_ENERGY] == this.link.store.getCapacity(RESOURCE_ENERGY)){
            this.result = this.link.transferEnergy(this.remoteLink)
        }
    }

    run(){
        this.transmitLinkWhenFull()
    }
}

module.exports = classes_structures_link