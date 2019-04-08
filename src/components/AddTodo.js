import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo'

class AddTodo extends Component {
    state = {
        content : ''
    }
    handleChange = (e) =>{
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content : ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo : (todo) => {dispatch(addTodo(todo))}
    }
}

export default connect(mapDispatchToProps)(AddTodo)