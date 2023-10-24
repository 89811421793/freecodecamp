{/*You create state in a React component by declaring a state property on the component class in its constructor; but can be also set as the class's field (with neither constructor nor 'this'):
class StatefulComponent extends React.Component {state = {firstName: 'Max'}}
render().....
 */}

 class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
  this.state = {
    firstName: 'Max'
  }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };