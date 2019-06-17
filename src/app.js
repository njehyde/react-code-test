import React from 'react';
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import store from './store';
import ToDoList from './components/todoList';
import styles from './styles.scss';

// NOTE: Similified this to a functional component
const App = () => {
	return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <div className="App">
                    <h2 className={styles.title}>Here is my To Do list for today</h2>
                    <ToDoList />
                </div>
            </DndProvider>
        </Provider>
	);
};

export default App;
