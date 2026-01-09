//Task
function Task({title,completed}){
   return (
      <li className="todo-item">
         <div className="view">
            <input className ="checkbox" 
            type="checkbox"
            checked={completed}
            readOnly/>
            <label>{title}</label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
         </div>
      </li>
   );
}

export default Task;