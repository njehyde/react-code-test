import React, { useEffect, useRef, useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    // Refs
    const inputRef = useRef(null);
    // State
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
    }, [inputRef]);
    
    /**
	 * Handles 'newTodo' input's onChange event.
	 * @param {any} event The 'newTodo' input's onChange event.
	 */
	const handleChange = event => {
		// NOTE: This would be a good place to insert input validation logic.
		setNewTodo(event.target.value);
    };
    
    /**
     * Handles the todo form submission. This calls the addTodo callback function and resets the form input.
     * @param {any} event  The form's submit event.
     */
    const handleFormSubmit = event => {
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                ref={inputRef}
                name="newTodo"
                placeholder="Enter todo"
                value={newTodo}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoForm;