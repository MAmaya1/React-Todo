import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
  
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <TodoList toDo={this.state.toDo}/>
        <TodoForm newItem={this.state.newItem} updateNewItem={this.updateNewItem} addNewItem={this.addNewItem}/>
      </div>
    );
  }
}

export default App;
