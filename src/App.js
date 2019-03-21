import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

const Todo = [
  {
  task: 'Create To Do List',
  id: 'testid',
  completed: false
  },
  {
  task: 'Submit To Do List',
  id: 'testid2',
  completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toDo: Todo,
      newItem: '',
    }
  }

  updateNewItem = (event) => {
    this.setState({
      newItem: event.target.value
    });
  };
  
  addNewItem = (event) => {
    event.preventDefault();
    const newListItem = {
      task: this.state.newItem,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDo: [...this.state.toDo, newListItem],
      newItem: ''
    });
  }

  toggleItem = id => {
    const newList = this.state.toDo.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })

    this.setState({toDo: newList});
  }

  clearCompleted = (event) => {
    event.preventDefault();
    const itemsNotCompleted = this.state.toDo.filter(item => {
      return item.completed === false;
    })

    this.setState({toDo: itemsNotCompleted});
  }
  
  render() {
    return (
      <div className="wrapper">
        <h1>To Do List</h1>
        <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem}/>
        <TodoForm 
          newItem={this.state.newItem}
          updateNewItem={this.updateNewItem}
          addNewItem={this.addNewItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
