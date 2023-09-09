function quickCheck(arr, elem) {
    // Only change code below this line
  if (arr.indexOf(elem) == -1) { // strict equality '===' will do as well
    return false
  } else {
    return true
    }
  
  /*or like this maybe: return arr.indexOf(elem) == -1 ? false : true;
  */
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));