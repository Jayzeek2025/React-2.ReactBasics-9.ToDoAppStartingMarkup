// TaskList.jsx
import Task from './Task.jsx';

function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </ul>
  );
}

export default TaskList;
