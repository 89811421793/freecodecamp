function mutation(arr) {
 
    /*  let regExp = new RegExp('[^'+arr[0]+']', "i");
        return !regExp.test(arr[1]);
    */
    
    var y = [arr[0].toLowerCase(),arr[1].toLowerCase()];
      var x = y[1].split("");
      var ver;
      for (var i=0;i<x.length;i++){
       if (y[0].indexOf(x[i])>=0){
         ver=true;
       }else if(y[0].indexOf(x[i])<0){
         ver=false;
         break;
       }
      }
      switch(ver){
        case true:
          return true;
          
        case false:
          return false;    
      }
    }
    
    mutation(["hello", "hey"]);