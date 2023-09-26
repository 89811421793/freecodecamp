function fearNotLetter(str) {
    /*
    for (let i = 0; i < str.length; i++) {
      // code of current character 
      const charCode = str.charCodeAt(i);
  
      //if code of current character is not equal to first 
      //character + no of iteration then a letter was skipped
      if (charCode !== str.charCodeAt(0) + i) {
    // if current character skipped past a character find 
    //previous character and return 
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
    */
    
    /*
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str
      .split("")
      .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
          currCharCode++;
        } else {
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  */
  
  /*
  for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  */
  
  var allChars = "";
    var notChars = new RegExp("[^" + str + "]", "g");
  
    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
      allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  
    return allChars.match(notChars)
      ? allChars.match(notChars).join("")
      : undefined;
  }
  
  fearNotLetter("abce");