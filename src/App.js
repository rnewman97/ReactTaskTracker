import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  } 

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  } 


  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch (`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers:{ 'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {id, ...task}

    await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
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
