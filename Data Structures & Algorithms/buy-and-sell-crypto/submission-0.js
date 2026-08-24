class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]
        let profit = 0
        for (let i=1;i<prices.length-1;i++){
            buy = Math.min(prices[i-1], buy)
            let cProfit = prices[i] - Math.min(prices[i-1], buy)
            if (cProfit > profit) {
                profit = cProfit
            }
        }

        return profit
    }
}
