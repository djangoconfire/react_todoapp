import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/deleteTodo'

class Todos extends React.Component{
    render(){
        console.log(this.props)
        const { todos , deleteTodo} = this.props
        const todoList = todos.length ? (
            todos.map(todo =>{
                return (
                    <div className="collection-item" key={todo.id}>
                        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                    </div>
                )
            })
        ) : (<p className="center">No todos left</p>)

        return (
            <div className="todos collection">
                {todoList}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo : (id) => {dispatch(deleteTodo(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)