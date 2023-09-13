function findLongestWordLength(str) {
    //1) return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
  
    /*2) let longestWord = str.split(' ').reduce((longest, currentWord) => {
       return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  */
  
  var strSplit = str.split(' ');
  // Initiate a var that will hold the length of the longest word
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
      longestWord = strSplit[i].length; //...then longestWord takes this new value
       }
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");