Array.prototype.myMap = function(callback) {
    const newArray = [];
    //Only change code below this line
    
  /*for (let i=0; i < this.length; i++) {
   let elem = this[i];
   newArray.push(callback(elem,i,this));
   }
  */
  
  this.forEach((elem, i, oldArr) =>
      newArray.push(callback(elem, i, oldArr))
    );
  
  
    // Only change code above this line
    return newArray;
  };