function booWho(bool) {
    return (bool === true || bool === false)? true:false;
    /*through if:
    if (bool === true || bool === false) {
       return true
     } else {
       return false
     }
    */
   
   /*typeof operator:
   return (typeof bool === 'boolean')
   */
   }
   
   booWho(null);