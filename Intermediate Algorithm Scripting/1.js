function sumAll(arr) {
    // let max = Math.max(arr[0], arr[1]);
    //   let min = Math.min(arr[0], arr[1]);
    //   let sumBetween = 0;
    //   for (let i = min; i <= max; i++) {
    //     sumBetween += i;
    //   }
    //   return sumBetween;
    // _____________________________________
    
    //  let sumBetween = 0;
    //   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    //     sumBetween += i;
    //   }
    //   return sumBetween;
    //  ______________________________________
    
    
    const [first, last] = [...arr].sort((a, b) => a - b);
      return first !== last
        ? first + sumAll([first + 1, last])
        : first;
    }
    
    sumAll([1, 4]);