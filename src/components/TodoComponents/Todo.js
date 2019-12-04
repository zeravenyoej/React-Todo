//- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';

const TodoCard = (props) => {
    console.log('todoComp: ', props)

    const handleClick = event => {
        event.preventDefault();
        props.toggleCompleted(props.thing.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.thing.completed ? ' completed' : ''}`}>
            <p>{props.thing.task}</p>
        </div>
    );
    };


export default TodoCard; 
