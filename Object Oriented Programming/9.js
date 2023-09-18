function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let prop in canary) {
    if (prop in canary) {    //or if(canary.hasOwnProperty(prop))
      ownProps.unshift(prop);  // or use push(prop)
    }
  }