class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
  console.log("The componentWillMount() method is called before the render() method when a component is being mounted to the DOM")
      // Change code above this line
    }
    render() {
      return <div />
    }
  };
  
  {/*lifecycle methods(or lifecycle hooks) allow  to catch components at certain points in the lifecycle of a component(before they are rendered, before they update, before they receive props, before they unmount, and so on). Some of the main lifecycle methods: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()
  */}