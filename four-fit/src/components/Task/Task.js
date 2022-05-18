import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
    <h3>{task.text} <FaTimes style={{ color: "#bb1818", cursor: "pointer" }} onClick={() => onDelete(task.id)}/></h3>
    <p>{task.date} at {task.time}</p>
    </div>
  )
}

export default Task