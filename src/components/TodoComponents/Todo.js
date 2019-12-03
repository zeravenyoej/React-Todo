//- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';

const TodoItem = (props) => (
    <div>
        <p>{props.thing.task}</p>
    </div>
);


export default TodoItem; 
