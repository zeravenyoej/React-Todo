// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
/*`<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` 
for each element in the array.*/

import React from 'react';
import TodoCard from './Todo';


const TodoList = (props) => {

    return (
        props.things.map(thing=>(
            <TodoCard
                // key={thing.id}    
                thing={thing}
                toggleCompleted={props.toggleCompleted}
            />
        ))
    )
};

export default TodoList;