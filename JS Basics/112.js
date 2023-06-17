// Only change code below this line
function countdown(n){
    if (n < 1) {
      return new Array();      //or return []
    } else {
      let myArray = countdown (n-1);
      myArray.unshift(n);
      return myArray;
    }
  }
  // Only change code above this line
  
  
  
  /*countup:
  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
  */