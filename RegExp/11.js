let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


/*create a set of characters that you do not want to match. These types of character sets are called negated character sets.
For example, /[^aeiou]/gi matches all characters that are not a vowel*/