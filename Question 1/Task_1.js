const readline = require("readline");

const rll = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function longestUniqueSubstring(s) {
  let maxLength = 0; 
  let start = 0;     
  const seenChars = {}; 

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

   
    if (seenChars[char] >= start) {
      start = seenChars[char] + 1; 
    }

    seenChars[char] = end; 
    maxLength = Math.max(maxLength, end - start + 1); 
  }

  return maxLength;
}
rll.question("Enter a string: ", (input) => {
  const result = longestUniqueSubstring(input);
  console.log(`Length of the longest unique substring is: ${result}`);
  rll.close();
});
