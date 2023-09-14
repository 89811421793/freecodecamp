function titleCase(str) {
    /*  return str.toLowerCase().split(' ').map(function(word) {
       return word.replace(word[0], word[0].toUpperCase());
     }).join(' ');
    */
  
    /* return str.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    */
  
     str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  titleCase("I'm a little tea pot");