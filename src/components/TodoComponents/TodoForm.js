import React from 'react';

const TodoForm = (props) => (
    <div>
        <input
            placeholder='...to do'
            type='text'
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
    </div>
);

export default TodoForm;