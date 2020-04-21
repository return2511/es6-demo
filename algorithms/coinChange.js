/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    if (amount === 0) return 0;
    const list = Array(amount + 1).fill(Number.MAX_VALUE)
    list[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                list[i] = Math.min(list[i], list[i - coins[j]] + 1)
            }
        }
    }

    return list[amount] === Number.MAX_VALUE ? -1 : list[amount]
};

coins = [1,2,5], amount = 13

console.log('coin number', coinChange(coins, amount))