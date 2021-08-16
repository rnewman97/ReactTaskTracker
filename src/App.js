import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {id: 1,
    text: "Doctor's Appointment",
    day: '2000-05-07',
    reminder: true},
    {id: 2, 
    text: "Meeting at School", 
    day: '2000-05-08', 
    reminder: true},
    {id: 3,
    text: "Grocery Shopping",
    day: '2000-05-09',
    reminder: false},
  ])

  // FILTER FOR THE TASKS WHOSE ID IS NOT EQUAL TO ID! SAVE THEM INTO the state as a NEW OBJECT
  // Filter for the tasks whose ID is not equal to id! (i.e. filter out the task whose ID IS equal to ID!)

  // MAP AND FILTER RETURN ARRAYS! INSIDE ARRAY, TASKS ARE "OBJECTS!" ALLOWING US TO RETURN AN ARRAY OF OBJECTS WHEN WE CALL FILTER/MAP FROM SET, TASKS. PASSING IN (TASK), TASK IS AN OBJECT. 
  // ARRAY OF OBJECTS!

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // So not just return an object where {... but need to include variable name (i.e. the name of the variable storing the object). So ...task is "everything in task except what comes after comma"}
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onClick={toggleAddTask} showAdd={showAddTask}></Header>
      {showAddTask && <AddTask onAdd = {addTask}></AddTask>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 
      'Up to date! Go and chill 😎'}
    </div>
  );
}

export default App;
