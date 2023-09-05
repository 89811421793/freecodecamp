let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

/*match the word Hazzah only when it has four or more letter z's.;
specifying the lower number of patterns with no upper limit*/