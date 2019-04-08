const initialState = {
    todos : [
        {id : 1 , content : 'buy milk'},
        {id : 2 , content : 'buy more milk'},
        {id : 3 , content : 'make the bed'}
      ]
}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case 'DELETE_TODO': {
            const todos = state.todos.filter(todo => todo.id !== action.id)
            return {
                ...state,
                todos : todos
            }
        }
        case 'ADD_TODO': {
            return {...state}
        }
        default:
            return state
    }
}

export default rootReducer