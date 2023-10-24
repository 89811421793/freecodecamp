const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {quantity: PropTypes.number.isRequired}
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
  
  
  {/*Here's an example to require the type function for a prop called handleClick:
  
  MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
  
  In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided*/}
  
  {/*As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';*/}