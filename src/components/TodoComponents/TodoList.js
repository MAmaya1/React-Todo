// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = (props) => {
    return (
        <div className="to-do-list">
            {props.toDo.map(item => (
                <p key={item.id}>{item.task}</p>
            ))}
        </div>
    );
};

export default TodoList;