import { useState } from "react"

import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import AddTask from "../AddTask/AddTask";

import logo from "../../logo.png"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Jogging at The Park",
        date: "2022-04-18",
        time: "09:00",
    },
    {
        id: 2,
        text: "Fitness with Jack",
        date: "2022-04-19",
        time: "13:00",
    },
    {
        id: 3,
        text: "Sauna Time",
        date: "2022-04-19",
        time: "17:00",
    }
])

// Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask ={ id, ...task }
    setTasks([...tasks, newTask])
  }

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  return (
    <div className="container">
      <Header logo={logo} title={"FOURFIT"} onAdd={() => {setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ""}
      {tasks.length > 0 ? (
      <Tasks 
        tasks={tasks} onDelete={deleteTask} />) : "No tasks to show" }
    </div>
  );
}

export default App;
