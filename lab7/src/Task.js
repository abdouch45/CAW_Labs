import React, { useState } from 'react';
import './styleCss.css';

const Task = ({ task, onDelete, onSubtaskDone }) => {
  const [subtasks, setSubtasks] = useState([]);
  const [newSubtask, setNewSubtask] = useState('');
  const [showSubtaskForm, setShowSubtaskForm] = useState(false);

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { text: newSubtask, done: false }]);
    setNewSubtask('');
    setShowSubtaskForm(false);
  };

  const handleSubtaskDone = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index].done = true;
    setSubtasks(updatedSubtasks);
    onSubtaskDone();
  };

  return (
    <div className='task'>
      <button onClick={() => onDelete()} className='button'>
        X
      </button>
      <p className='title'>{task}</p>

      <ul>
        {subtasks.map((subtask, index) => (
          <li key={index} className={`li ${subtask.done ? 'done' : ''}`}>
            {subtask.done ? <s>{subtask.text}</s> : subtask.text}
            {!subtask.done && (
              <button onClick={() => handleSubtaskDone(index)} className='done'>
                Done
              </button>
            )}
          </li>
        ))}
      </ul>

      <button onClick={() => setShowSubtaskForm(true)}>Add Subtask</button>

      {showSubtaskForm && (
        <div className='modal-background'>
          <div className='modal'>
            <label htmlFor='subtaskDescription'>New Subtask:</label>
            <input
              id='subtaskDescription'
              type='text'
              placeholder='Enter a new subtask'
              value={newSubtask}
              onChange={(e) => setNewSubtask(e.target.value)}
            />
            <button onClick={handleAddSubtask}>Add Subtask</button>
            <button onClick={() => setShowSubtaskForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
