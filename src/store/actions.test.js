import * as actionTypes from './actionTypes';
import { buildTodo } from '../utils';
import { addTodo, removeTodo, updateTodos } from './actions';

test('addTodo should have a type', () => {
    const value = 'Test todo';
    const todos = [];
    const action = addTodo(todos, value);
    expect(action).toBeDefined();
    expect(action.type).toBeDefined();
    expect(action.type).toEqual(actionTypes.ADD_TODO);
});

test('addTodo should add a todo', () => {
    const value = 'Test todo';
    const todos = [];
    const action = addTodo(todos, value);
    expect(action).toBeDefined();
    expect(action.todos).toBeDefined();
    expect(action.todos).toHaveLength(1);
    expect(action.todos[0].id).toBeDefined();
    expect(action.todos[0]).toHaveProperty('value', value);
});

test('removeTodo should have a type', () => {
    const value = 'Test todo';
    const todos = [buildTodo(value)];
    const action = removeTodo(todos, 0);
    expect(action).toBeDefined();
    expect(action.type).toBeDefined();
    expect(action.type).toEqual(actionTypes.REMOVE_TODO);
});

test('removeTodo should remove a todo', () => {
    const value = 'Test todo';
    const todos = [buildTodo(value)];
    const action = removeTodo(todos, 0);
    expect(action).toBeDefined();
    expect(action.todos).toBeDefined();
    expect(action.todos).toHaveLength(0);
});

test('updateTodo should have a type', () => {
    const value = 'Test todo';
    const todos = [buildTodo(value)];
    const action = updateTodos(todos);
    expect(action).toBeDefined();
    expect(action.type).toBeDefined();
    expect(action.type).toEqual(actionTypes.UPDATE_TODOS);
});

test('updateTodo should return updated todos', () => {
    const firstValue = 'First todo';
    const secondValue = 'Second todo';
    const todos = [buildTodo(firstValue), buildTodo(secondValue)];
    const action = updateTodos(todos);
    expect(action).toBeDefined();
    expect(action.todos).toBeDefined();
    expect(action.todos).toHaveLength(2);
    expect(action.todos[0].id).toBeDefined();
    expect(action.todos[1].id).toBeDefined();
    expect(action.todos[0].value).toEqual(firstValue);
    expect(action.todos[1].value).toEqual(secondValue);
});