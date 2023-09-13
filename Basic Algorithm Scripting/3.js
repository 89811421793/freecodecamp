function factorialize(num) {
    /*if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
    */
     var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  
  factorialize(5);
  
  /*
  When you factorialize a number, you are multiplying that number by each consecutive number minus one.
  0! = 1
  1! = 1
  2! = 2 * 1
  3! = 3 * 2 * 1
  4! = 4 * 3 * 2 * 1
  5! = 5 * 4 * 3 * 2 * 1
  */