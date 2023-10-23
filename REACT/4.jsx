const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  {/*With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM:
  ReactDOM.render(componentToRender, targetNode)*/}
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'));