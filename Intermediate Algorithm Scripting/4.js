function whatIsInAName(collection, source) {

    /*const sourceKeys = Object.keys(source);
    
      // filter the collection
      return collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++) {
          if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
            return false;
          }
        }
        return true;
      });
    */
    
    /*
    // What's in a name?
      const collectionMatches = [];
    
      for (let i = 0; i < collection.length; i++) {
        let foundMismatch = false;
    
        for (const sourceProp in source) {
          if (collection[i][sourceProp] !== source[sourceProp]) {
            foundMismatch = true;
          }
        }
        if (!foundMismatch) {
          collectionMatches.push(collection[i]);
        }
      }
      return collectionMatches;
    */
    
    const sourceKeys = Object.keys(source);
    
      return collection
        .filter(obj => sourceKeys
          .every(key => obj[key] === source[key]));
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });