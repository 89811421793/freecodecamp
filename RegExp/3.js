let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // will match dog, cat, bird, or fish if you choose this pattern
let result = petRegex.test(petString);

/*the symbol | signifies the 'alternation' or 'OR' operator*/