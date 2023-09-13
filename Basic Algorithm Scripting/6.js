function confirmEnding(str, target) {
    return (str.substr(-target.length) === target) ? true : false;
   
   // or:
   
   // return str.substr(-target.length) === target;
   
   
   // or:  return str.endsWith(target);
   }
   
   confirmEnding("Bastian", "n");
   
   
   
   /*The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
   If the target.length is negative(-target), the substr() method will start the counting from the end of the string
   */