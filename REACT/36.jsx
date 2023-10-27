class Colorful extends React.Component {
    render() {
      return (
        <div style={{color: "red", fontSize: '72px'}}>Big Red</div>
      );
    }
  };
  
  {/*'72px' can be conveyed as 72 as well (px units are omitted;
  compare to the inline styles in html: <div style="color: yellow; font-size: 16px">*/}