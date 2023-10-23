const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
          <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  {/*The ready-made component is inserted with self-closing tag: <Component />;
  The 'App' component is a big generating parent component of sorts; omitted and replaced sometimes
  */};