// Setup
const myArray = [];

// Only change code below this line


for (let i=1; i<=9; i++ ) {   // or i<10
  if (i%2==0) continue
  myArray.push(i);
}


// Or like this:
/*for (let i=1; i<=9; i+=2 ) 
  {
  myArray.push(i);
}*/


/* Or like this:
for (let i=1; i<=9; i+=1 ) {        // or i<10
  if (i% 2 !== 0) 
  myArray.push(i);
} */


/*Or this one:
for (let i=1; i<=9; ++i ) {   
  if (i%2) myArray.push(i);
}*/