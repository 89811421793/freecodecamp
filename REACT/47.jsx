{/*So far, we have been rendering React components on the client (browser).  However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and we can run JavaScript on the server with Node. In fact, React provides a renderToString() method we can use for this purpose.The renderToString() method is provided on ReactDOMServer, which is available here as a global object. The method takes one argument which is a React element*/}

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // Change code below this line
  ReactDOMServer.renderToString(<App />);