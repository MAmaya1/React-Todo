// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="to-do-list">
            {props.toDo.map(item => (
                <Todo key={item.id} completed={item.completed} task={item.task}/>
            ))}
        </div>
    );
};

export default TodoList;