/*The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
see also learn.javascript.ru (log function example)
*/

function add(x) {
    // Only change code below this line
  
   return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  
    // Only change code above this line
  }
  
  /* or separately rewriting:
  const add = x => y => z => x + y + z;
  */
  
  add(10)(20)(30);     //add(x)(y)(z)