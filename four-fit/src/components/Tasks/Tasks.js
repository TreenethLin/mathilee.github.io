import Task from "../Task/Task"

const Tasks = ({ tasks, onDelete }) => {
    return (
    <div>
        {tasks.map(task => {
            return <Task key={task.id} task={task} onDelete={onDelete} />
        })}
    </div>
  )
}

export default Tasks