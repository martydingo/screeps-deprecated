recipes_market_utriumMarketCookbook = {
    findSellOrders: function(homeRoom, transactionCostLimit){
        utriumSellOrderbook = Game.market.getAllOrders(order => order.resourceType == RESOURCE_UTRIUM && order.type == ORDER_SELL && Game.market.calcTransactionCost(100, homeRoom, order.roomName) < transactionCostLimit); // transactionCostLimit is in %
        for(record in utriumSellOrderbook){
            orders = {
            "id": console.log(utriumSellOrderbook[record].id),
            "roomName": console.log(utriumSellOrderbook[record].roomName),
            "amount": console.log(utriumSellOrderbook[record].amount),
            "remainingAmount": console.log(utriumSellOrderbook[record].remainingAmount),
            "price": console.log(utriumSellOrderbook[record].price)
            }
        }
        return orders
    }
}

module.exports = recipes_market_utriumMarketCookbook