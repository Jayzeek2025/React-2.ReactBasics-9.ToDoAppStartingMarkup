import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';

function App(){
 //State
   const [tasks] = useState([
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


  return (

  <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
      </header>

      <section className="main">
        <TaskList tasks={tasks}/>
      </section>

      <Footer />
  </section>
     
  );
}

export default App;