import uuidv1 from 'uuid/v1';

/**
 * Returns a new todo that contains a unique id and the received value.
 * @param {string} value The value of the todo.
 */
export const buildTodo = (value) => {
	return {
		id: uuidv1(), // Added to provide React with a unique and stable identifier for the todo.
		value
	};
}

/**
 * Helper method to immutably update an object's properties.
 * @param {any} oldObject The original object to update.
 * @param {any} updatedProperties The updating properties.
 */
export const updateObject = (oldObject, updatedProperties) => ({
	...oldObject,
	...updatedProperties
});