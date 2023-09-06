let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
// or without the variable it'll be: let result = str.replace(fixRegex, '$3 $2 $1')

/*let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

The replace call would return the string The sky is blue
*/

/*You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
The replace call would return the string Camp Code.
*/