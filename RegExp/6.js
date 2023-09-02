let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // i-flag needed; g-flag is to search or extract a pattern more than once
let result = twinkleStar.match(starRegex); // Change this line