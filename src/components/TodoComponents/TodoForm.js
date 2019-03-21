import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input value={props.newItem} placeholder="New Task" onChange={props.updateNewItem}/>
            <div className="button-wrap">
                <button onClick={props.addNewItem}>Add Item</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </form>
    );
};

export default TodoForm;