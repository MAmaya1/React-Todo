import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input value={props.newItem} placeholder="New Task" onChange={props.updateNewItem}/>
            <button onClick={props.addNewItem}>Add Item</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;