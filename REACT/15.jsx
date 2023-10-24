const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={['learn JS', 'go shopping']}/>
          <h2>Tomorrow</h2>
          <List tasks={['do physical exercisez', 'feed cat','wash the dishes']}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };