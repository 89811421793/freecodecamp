let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

/*The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].*/