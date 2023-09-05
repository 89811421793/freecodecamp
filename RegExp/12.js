let difficultSpelling = "Mississippi";
let myRegex = /s+/ig // Change this line
let result = difficultSpelling.match(myRegex);

/*Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"];  checking the string abab would find two matches and return ["a", "a"]*/