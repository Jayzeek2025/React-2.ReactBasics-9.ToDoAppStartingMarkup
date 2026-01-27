import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';

// Provided Initial Tasks
const initialTasks = [
  { "userId": 1, "id": 1, "title": "delectus aut autem","completed": false },
  { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui","completed": false},
  { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
  { "userId": 1, "id": 4, "title": "et porro tempora", "completed": true },
  { "userId": 1, "id": 5, "title": "qui ullam ratione quibusdam voluptatem quia omnis","completed": false },
  { "userId": 1, "id": 6, "title": "illo expedita consequatur quia in", "completed": false },
  { "userId": 1, "id": 7, "title": "quo adipisci enim quam ut ab","completed": true},
  { "userId": 1, "id": 8, "title": "molestiae perspiciatis ipsa", "completed": false},
  { "userId": 1, "id": 9, "title": "illo est ratione doloremque quia maiores aut", "completed": true },
  { "userId": 1, "id": 10,"title": "vero rerum temporibus dolor","completed": true },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  // Add task
  function addTask(title) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        completed: false
      }
    ]);
  }

  // Toggle task
  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Edit task
  function editTask(id, newTitle) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  }

  // Clear completed
  function clearCompleted() {
    setTasks(tasks.filter(task => !task.completed));
  }

  // Filtering logic
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </section>

      <Footer
        tasks={tasks}
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;