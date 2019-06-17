import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import ItemTypes from '../constants/ItemTypes';
import styles from '../styles.scss';

// NOTE: The 'drag and drop' logic was adapted from the 'sortable' example provided in the react-dnd documentation
// (see http://react-dnd.github.io/react-dnd/examples/sortable/simple)

const ToDo = ({ id, index, value, completeTodo, moveTodo }) => {
	const todoRef = useRef(null);

	const [, drop] = useDrop({
		accept: ItemTypes.TODO,
		hover(item, monitor) {
			if (!todoRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = todoRef.current.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveTodo(dragIndex, hoverIndex);
			item.index = hoverIndex;
		}
	});

	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.TODO, id, index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});

	const opacity = isDragging ? 0 : 1;
	drag(drop(todoRef));

	return (
		<li ref={todoRef} className={styles.todo} style={{ opacity }}>
			<input type="checkbox" onChange={() => completeTodo(index)} />
			<div className={styles.todoContent}>{value}</div>
		</li>
	);
};

ToDo.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	completeTodo: PropTypes.func.isRequired,
	moveTodo: PropTypes.func.isRequired
};

export default ToDo;
