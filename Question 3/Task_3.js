const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function coinCombinations(coins, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; 

  for (let coin of coins) {
    for (let amount = coin; amount <= target; amount++) {
      dp[amount] += dp[amount - coin];
    }
  }

  return dp[target];
}

rl.question("Enter coin denominations (comma-separated): ", (coinInput) => {
  const coins = coinInput.split(",").map(Number);

  rl.question("Enter the target amount: ", (targetInput) => {
    const target = parseInt(targetInput);

    const result = coinCombinations(coins, target);
    console.log(`Number of combinations to make ${target}: ${result}`);

    rl.close();
  });
});


