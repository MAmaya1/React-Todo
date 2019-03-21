import React from 'react';

function Todo(props) {
    return (
        <div 
            className={`items ${props.item.completed ? "completed" : ''}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.task}</p>
        </div>
    );
}

export default Todo;