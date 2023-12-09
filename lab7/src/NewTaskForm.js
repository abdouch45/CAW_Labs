import React, { useState } from 'react';
import './styleCss.css' 


const NewTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask({ task, });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formNewtask'>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
