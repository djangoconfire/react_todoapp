import React, { Component } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="todo-app container">
        <h2 className="center blue-text">Todo's</h2>
        <Todo/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
