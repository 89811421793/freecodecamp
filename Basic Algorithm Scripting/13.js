function bouncer(arr) {
    return arr.filter(element => Boolean(element) === true);
   
   /*alternative:
   const select = arr.filter(i => Boolean(i));
   return select;
   */
   }
   
   bouncer([7, "ate", "", false, 9]);