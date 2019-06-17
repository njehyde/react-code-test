import * as actionTypes from './actionTypes';
import { buildTodo } from '../utils';
import update from 'immutability-helper';

/**
 * Adds a new element to the end of an updated todos array, then returns the updated array.
 * @param {array} todos The todos array.
 * @param {string} value The value of the todo to be added.
 */
export const addTodo = (todos, value) => {
	return { 
        type: actionTypes.ADD_TODO,
        todos: update(todos, {
            $push: [buildTodo(value)]
        })
    };
}

/**
 * Removes a todo element by index position, then returns the updated array.
 * @param {array} todos The todos array.
 * @param {number} index The index of the array element to be removed.
 */
export const removeTodo = (todos, index) => {
	return {
        type: actionTypes.REMOVE_TODO,
        todos: update(todos, {
		    $splice: [[index, 1]]
        })
    };
}

/**
 * Updates the array of todos.
 * @param {array} todos  The todos array.
 */
export const updateTodos = (todos) => {
    return {
        type: actionTypes.UPDATE_TODOS,
        todos
    };
}