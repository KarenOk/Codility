// Final Coding Interview at BuyCoins. Find the max profit given that a stock must be bought before its sold


let prices = [6, 0, -1, 10];
let profits = [];
const solution = (prices) => {
    // Type your solution here
    if(!prices){
      return 0;
    } else {
      for (var i = prices.length - 1; i >= 0; i--){
        if (i !== 0) profits.push(prices[i] - Math.min(...prices.slice(undefined,i)))
        else profits.push(prices[i])
      }
    }
    console.log(profits);
};

solution(prices)



