let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

/*regex pattern /Waldo/ will not match 'waldo' or 'WALDO';
other patterns will do the trick*/