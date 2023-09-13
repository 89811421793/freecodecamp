function repeatStringNumTimes(str, num) {
    let x = '';
     let i = 0;
     while(i < num) {
        x += str; i++;
     }
     return x;
     
 
     /*'for' loop:
      for(let i = 0; i < num; i++){
         x += str;
     }*/
 
 }
 
 /* or: times > 0 ? string.repeat(times) : ""*/
 
 repeatStringNumTimes("abc", 3);