const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function maxPathSum(matrix, n, m) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const down = dp[i - 1][j]; 
      const diagLeft = j > 0 ? dp[i - 1][j - 1] : 0; 
      const diagRight = j < m - 1 ? dp[i - 1][j + 1] : 0; 

      dp[i][j] = matrix[i][j] + Math.max(down, diagLeft, diagRight);
    }
  }
  return Math.max(...dp[n - 1]);
}
const inputLines = [];
console.log("Enter the matrix row by row (space-separated). Type 'END' to finish:");

rl.on("line", (line) => {
  if (line.trim() === "END") {
    rl.close();
    return;
  }
  inputLines.push(line);
});

rl.on("close", () => {
  const matrix = inputLines.map((line) => line.split(" ").map(Number));
  const n = matrix.length;
  const m = matrix[0].length;

  const result = maxPathSum(matrix, n, m);
  console.log(`The maximum path sum is: ${result}`);
});
