let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/*the pattern \s equals to [ \r\t\f\n\v] and matches whitespace, carriage return, tab, form feed, and new line characters*/