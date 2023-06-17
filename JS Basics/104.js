// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
  // using 'for..of' loop for array items and assign to the variable 'contact' 
  for(let contact of contacts){
  
    //check if name is an actual contact's firstName
      if (name==contact["firstName"]){
        
    //check if property (prop) is a property of that contact.
          if (contact.hasOwnProperty(prop)){//or:if(contact[prop])
              return contact[prop];
          } else {
              return "No such property" 
          }
      }
  }
  return "No such contact"
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  
  
  
  
  