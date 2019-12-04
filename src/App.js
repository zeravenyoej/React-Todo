import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const data =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super ();
    this.state = {
      things: data
    };
    this.toggleCompleted=this.toggleCompleted.bind(this);
  };

  toggleCompleted = itemId => {
    this.setState({
      things: this.state.things.map(item => {
        if(item.id===itemId) {
          return {
            ...item,
            completed: !item.completed
          }}
        return item;
        })
    })
  };

  addItem = itemName => {
    console.log('add item: ', itemName)
    this.setState({
      things: [
        ...this.state.things, 
        {
          task: itemName, 
          id: Date.now(),
          completed: false
        },
      ]
    })
  };

  deleteCompleted = itemName => {
    this.setState({
      things: this.state.things.filter(thing => {
        return !thing.completed
      })
    })
  }

  render() {
    return (
      <div className={'mainDiv'}>
        <h1>To Do List</h1>
        <TodoForm
          addItem={this.addItem}
          deleteCompleted={this.deleteCompleted}/>
        <TodoList 
          things={this.state.things}
          toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
