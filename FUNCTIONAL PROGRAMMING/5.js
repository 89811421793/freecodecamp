// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
  return fixedValue + 1; 
// Only change code above this line
}

/*Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument;

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.*/
