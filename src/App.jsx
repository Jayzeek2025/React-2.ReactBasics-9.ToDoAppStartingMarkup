import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';

function App(){
 //State
   const [tasks,setTasks] = useState([
  {
    id: 1,
    title: "Learn React",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Learn Components",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Learn Props",
    completed: false,
    createdAt: new Date(),
  },
]);

//Toggle

function toggleTask(id) {
  setTasks(
    tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    })
  );
}

//delete
function deleteTask(id) {
  setTasks(
    tasks.filter(task => task.id !== id)
  );
}

//EditTitle
function editTask(id, newTitle) {
  setTasks(
    tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    })
  );
}

//App
  return (

  <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
      </header>

      <section className="main">
        <TaskList tasks={tasks} 
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}/>
      </section>

      <Footer />
  </section>
     
  );
}

export default App;