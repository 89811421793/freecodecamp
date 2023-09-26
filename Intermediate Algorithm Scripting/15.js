function dropElements(arr, func) {
    /*
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  */
  
  /*
  let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  */
  
  /*
  // drop them elements.
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  */
  
  return arr.length > 0 && !func(arr[0])
      ? (dropElements(arr.slice(1), func))
      : arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });