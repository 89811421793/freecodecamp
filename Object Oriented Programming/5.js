/*Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create
*/

function Dog() {
    this.name = "Spot";
    this.color = "blue";
    this.numLegs = 4;
  }