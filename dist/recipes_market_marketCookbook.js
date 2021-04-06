var recipes_market_marketCookbook = {
    findAllLocalOrders: function(homeRoom, roomDistanceLimit){
        sellOrderbookScrape = Game.market.getAllOrders()
        sellOrderbook = sellOrderbookScrape.filter(order => Game.map.findRoute(homeRoom, order.roomName) < roomDistanceLimit)
        for(sellOrder in sellOrderbook){
            console.log(sellOrderbook[sellOrder].id)
            console.log(sellOrderbook[sellOrder].roomName)
            console.log(sellOrderbook[sellOrder].amount)
            console.log(sellOrderbook[sellOrder].remainingAmount)
            console.log(sellOrderbook[sellOrder].price)
        }
    }
}

module.exports = recipes_market_marketCookbook