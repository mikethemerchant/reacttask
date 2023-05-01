import Header from './components/Header'
import Task from './components/Task';
import { useState } from 'react'

// what is going on here
function App() {
  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

  return (
    <div className="App">
      <Header  title={'Mike Tracker'} />
      <Task tasks={tasks} />
    </div>
  )
}

export default App;
