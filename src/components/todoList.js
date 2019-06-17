import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';

import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import styles from '../styles.scss';
import * as actions from '../store/actions';

const ToDoList = ({ todos, addTodo, removeTodo, updateTodos }) => {
    
    /**
     * Handles adding a new todo to the array of todos.
     * @param {string} newTodo The new todo value
     */
    const handleAddTodo = newTodo => {
        // Remove any surrounding whitespace to avoid blank values making their way into the todos array.
        newTodo = newTodo.trim();
        if (newTodo.length > 0) {
            addTodo(todos, newTodo);
		}
    }

	/**
	 * Handles the completion of a todo by removing it from the todos array by index position.
	 * @param {nunber} index The index to remove.
	 */
	const handleCompleteTodo = index => {
        removeTodo(todos, index);
	};

	// NOTE: The 'drag and drop' logic was adapted from the 'sortable' example provided in the react-dnd documentation
	// (see http://react-dnd.github.io/react-dnd/examples/sortable/simple)
	const moveTodo = useCallback(
		(dragIndex, hoverIndex) => {
			const dragTodo = todos[dragIndex];
			const updatedTodos = update(todos, {
				$splice: [[dragIndex, 1], [hoverIndex, 0, dragTodo]]
			});
            updateTodos(updatedTodos);
		},
		[todos]
    );
    
    const renderTodos = () => {
        if (todos.length == 0) {
            return (
                <div className={styles['empty-label']}>No todos remaining</div>
            )
        }

        return (
            <div>
                <div className={styles['list-header']}>Drag and drop to sort todos:</div>
                <ul className={styles.list}>
                    {todos.map((todo, index) => (
                        <ToDo
                            key={todo.id}
                            id={todo.id}
                            index={index}
                            value={todo.value}
                            completeTodo={handleCompleteTodo}
                            moveTodo={moveTodo}
                        />
                    ))}
                </ul>
            </div>
        )
    }

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
                <ToDoForm addTodo={handleAddTodo} />
			</div>
            {renderTodos()}
		</div>
	);
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: (todos, value) => dispatch(actions.addTodo(todos, value)),
    removeTodo: (todos, index) => dispatch(actions.removeTodo(todos, index)),
    updateTodos: (todos) => dispatch(actions.updateTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
