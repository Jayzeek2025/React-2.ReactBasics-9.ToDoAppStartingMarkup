//Task
function Task(props){
   return (
      <li className="todo-item">
         <div className="view">
            <input className ="checkbox" type="checkbox"/>
            <label>{props.title}</label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
         </div>
      </li>
   );
}

export default Task;