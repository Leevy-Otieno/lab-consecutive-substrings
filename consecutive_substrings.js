function consecutiveSubstrings(string) {
  // type your code here
  let current = "";

  //substrings
  for (let j = i; j < string.length; j++) {
    current += string[j];
    result.push(current);
  }
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;
