import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react'
function App() {

  const [tasks, setTasks] = useState([
    {id: 1,
    text: "Doctor's Appointment",
    day: 'Monday',
    reminder: true},
    {id: 2, 
    text: "Meeting at School", 
    day: 'Tuesday', 
    reminder: true},
    {id: 3,
    text: "Grocery Shopping",
    day: "Saturday",
    reminder: false},
])

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
