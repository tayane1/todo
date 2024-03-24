
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>ToDo App</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;