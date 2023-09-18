/*Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false;
If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor: 
*/


function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  var myHouse = new House(2);
  myHouse instanceof House;