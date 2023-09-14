function getIndexToIns(arr, num) {
    /* arr.sort(function(a,b){
       return a - b;
     });
     for (let i = 0; i < arr.length; i++){
       if(num <= arr[i]){
         return i;  
         } 
     } 
     return arr.length;
    */
  
    if(arr.indexOf(num) === -1) {
      arr.push(num);
    }
  
    let newArr = arr;
  
    function sortNumber(a,b) {
      return a - b;
    }
  
    newArr.sort(sortNumber);
  
    return newArr.indexOf(num);
  
  }
  
  getIndexToIns([40, 60], 50);