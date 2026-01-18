import { useState } from 'react';

function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onEdit(task.id, editValue);
      setIsEditing(false);
    }
  }

  return (
    <li className={`${task.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <label>
          <span className="description">{task.title}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => setIsEditing(true)}
        ></button>

      
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>

      <input
        className="edit"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default Task;
