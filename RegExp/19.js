let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

/*[^A-Za-z0-9_] is equivalent to \W;
letters and figures/digits/numbers together are termed "alphanumerics"; the rest portion of the symbols are non-alphanumeric */