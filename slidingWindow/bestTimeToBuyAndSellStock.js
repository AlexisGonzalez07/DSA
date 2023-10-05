var maxProfit = (prices) => {
    var profit = 0
    
    for (let i = 0; i < prices.length; i++) {
        const todayPrice = prices[i];
        for (let j = i+1; j < prices.length; j++){
            if ((prices[j] - todayPrice) > profit){
                profit =  prices[j] - todayPrice
            }
        }
    }
    return profit
}




console.log(maxProfit([7,1,5,3,6,4]))