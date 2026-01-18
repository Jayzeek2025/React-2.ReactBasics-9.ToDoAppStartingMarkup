import TaskFilter from './TaskFilter.jsx';

function Footer({ tasks, onClearCompleted, filter, setFilter }) {
  const remaining = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {remaining} items left
      </span>

      <TaskFilter filter={filter} setFilter={setFilter} />

      <button
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
