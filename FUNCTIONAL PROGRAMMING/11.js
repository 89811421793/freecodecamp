function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice, endSlice);
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
  
  /*If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array.*/