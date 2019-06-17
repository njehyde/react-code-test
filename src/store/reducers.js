import * as actionTypes from './actionTypes';
import { buildTodo, updateObject } from '../utils';

const initialState = {
    todos: [buildTodo('Finish this test')]
};

const addTodo = (state, action) => updateObject(state, { todos: action.todos });
const removeTodo = (state, action) => updateObject(state, { todos: action.todos });
const updateTodos = (state, action) => updateObject(state, { todos: action.todos });

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return addTodo(state, action);
		case actionTypes.REMOVE_TODO:
            return removeTodo(state, action);
        case actionTypes.UPDATE_TODOS:
            return updateTodos(state, action);
		default:
			return state;
	}
};

export default reducer;