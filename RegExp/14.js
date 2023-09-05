let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

/*a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
Regular expressions are by default greedy*/

/*   /t[a-z]*i/ to the string "titanic"; the match would return ["titani"]; /t[a-z]*?i/ returns ["ti"]
*/