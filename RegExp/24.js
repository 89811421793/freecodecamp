let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/*\S searches for everything except whitespace,carriage return, tab, form feed, and new line characters. Equals to  the character class [^ \r\t\f\n\v]
 */