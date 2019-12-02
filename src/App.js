import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super ();
    this.state = {
      task: this.task,
      id: this.id,
      completed: this.completed,
    };
  };


  render() {
    return (
      <div>
        <h1>To Do List: MVP</h1>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
