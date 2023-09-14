function frankenSplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
      combinedArrays.splice(n, 0, arr1[i])
      n++ // or remove n++ and use (n+1, 0, arr1[i])
    }
   return combinedArrays
   
 
 
   /*or spread operator: let combinedArrays = arr2.slice()
   combinedArrays.splice(n, 0, ...arr1)
   return combinedArrays
   */
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);