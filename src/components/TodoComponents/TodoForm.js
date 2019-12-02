import React from 'react';
import TodoList from './TodoList';

const TodoForm = () => (
    <div>
        <input
            placeholder='...to do'
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
    </div>
);

export default TodoForm;