function addTogether() {
    /*
     const [first, second] = arguments;
    
      if (typeof (first) === "number") {
        if (typeof (second) === "number") return first + second;
        if (arguments.length === 1) return (second) => addTogether(first, second);
      }
    */
    
    /*
    const [first, second] = arguments;
      // First argument is not a number
      if (typeof(first) !== "number") {
        return undefined;
      }
      // First argument is a number
      //  and second argument is not defined
      else if (arguments.length === 1) {
        function addSecond(second) {
          // New argument is not a number
          if (typeof(second) !== "number") {
            return undefined;
          }
          // New argument is a number
          else {
            return first + second;
          }
        }
        // Note: returning a *function*
        return addSecond;
      }
      // First argument is a number
      //  and second argument is not a number
      else if (typeof(second) !== "number") {
        return undefined;
      }
      // First argument is a number
      //  and second argument is a number
      else {
        return first + second;
      }
    */
    
    const [first, second] = arguments;
    
      function addSecond(second) {
        if (typeof (second) === "number") return first + second;
      }
    
      if (typeof (first) === "number") {
        if (arguments.length === 1) return addSecond;
        if (arguments.length === 2) return addSecond(second);
      }
    }
    
    addTogether(2,3);