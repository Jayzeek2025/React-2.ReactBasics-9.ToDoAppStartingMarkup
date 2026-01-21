function Task({ title, completed }) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          readOnly
        />

        <label>
          <span className="description">{title}</span>
          <span className="created">created just        now</span>
        </label>
      </div>

        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
     
    </li>
  );
}

export default Task;
