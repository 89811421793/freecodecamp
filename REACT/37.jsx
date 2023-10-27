const styles={color: "purple", fontSize: 40, border: '2px solid purple'}
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

{/*the other ways to stylize (see documentation):
a) CSS-IN-CSS: ordinary css files;
b) CSS Modules
c) CSS-IN-JS: Styled Components*/}

{/*
If you have a large set of styles, you can assign a style object to a constant (at the top of the file)
*/}