import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from './actions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{description}</span>
    </div>
  );
};

export default Task;