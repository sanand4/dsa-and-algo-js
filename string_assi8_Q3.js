function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Initialize dp array
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // Fill dp array
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return dp[m][n];
}
//test
const word1 = "sea";
const word2 = "eat";
const minSteps = minDistance(word1, word2);
console.log(minSteps);
