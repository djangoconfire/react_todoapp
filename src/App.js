import React, { Component } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos : [
      {id : 1 , content : 'buy milk'},
      {id : 2 , content : 'buy more milk'},
      {id : 3 , content : 'make the bed'}
    ]

  }
  
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos , todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h2 className="center blue-text">Todo's</h2>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
