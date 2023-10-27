{/*When you create an array of elements, each one needs a key attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way*/}

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((item) =>
    <li key={item}>{item}</li>
  );; // Change this line
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };
  
  {/*Using the array index as the key (should be avoided):
  
  const renderFrameworks = frontEndFrameworks.map((item, index) =>
    <li key={index}>{item}</li>
  );*/}