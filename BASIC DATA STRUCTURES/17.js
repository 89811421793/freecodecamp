let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    //Only change code below this line
  
  if (userObj.hasOwnProperty('Alan')
  && userObj.hasOwnProperty('Jeff')
  && userObj.hasOwnProperty('Sarah')
  && userObj.hasOwnProperty('Ryan')) {
    return true
  } else {
    return false
  }
  
  // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
  
  
  /*or like this two:
if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) {
  return true
} else {
  return false
}

or:
return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
*/